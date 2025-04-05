
// server.js
// This server uses mutual TLS (mTLS) for secure authentication and authorization.
// It implements a WebSocket subscription model that currently supports a "home" subscription,
// which sends temperature and sensor data updates to authorized clients.

// Required Node.js modules
const https = require('https');
const fs = require('fs');
const express = require('express');
const WebSocket = require('ws');

// Create an Express application
const app = express();

/*
  Server TLS options:
  - The server uses its own certificate (server-cert.pem) and private key (server-key.pem).
  - It trusts client certificates that are signed by our local CA (ca-cert.pem).
  - We set requestCert: true so the server requests a client certificate during the TLS handshake.
  - For our industrial/local use case (offline), we might allow the connection to be established
    even if the certificate is not valid, so we can perform additional application-level authorization.
  - In production, you might set rejectUnauthorized: true for stricter security.
*/
const serverOptions = {
    // Read the server's certificate (public)
    cert: fs.readFileSync('./certs/server-cert.pem'),
    key: fs.readFileSync('./certs/server-key.pem'),
    ca: fs.readFileSync('./certs/ca-cert.pem'),
    requestCert: true,
    rejectUnauthorized: false, // We'll do extra auth checks in our code
};

// Create an HTTPS server using the above TLS options and Express app.
const server = https.createServer(serverOptions, app);

// Create a WebSocket server on top of the HTTPS server.
/** @type {import('wss').WebSocket} */
const wss = new WebSocket.Server({ server });

// A simple in-memory "local store" for authorized subscriptions.
// In this example, each connection gets a single subscription, starting with "home".
const subscriptions = {
    home: {
        // In the "home" subscription, we send both temperature and sensor data.
        // In a real system, you might configure more details here.
        sendData: () => {
            return {
                temperature: (20 + Math.random() * 10).toFixed(2), // Example temperature data
                sensorData: [
                    { type: "humidity", option: "kitchen", value: 55 },
                    { type: "particle", value: 1.3 },
                    { type: "voc", value: 20 },
                    { type: "co", value: 700 },
                ],
            };
        },
    },
};

// WebSocket connection handler
wss.on('connection', (ws, req) => {
    // Retrieve the client certificate from the TLS socket.
    const tlsSocket = /** @type {import('tls').TLSSocket} */ (req.socket);
    const cert = tlsSocket.getPeerCertificate();

    let authorized = false;  // Flag to determine if this connection is authorized.

    // Check if a certificate was provided.
    if (tlsSocket.authorized || (cert && Object.keys(cert).length > 0)) {
        // For our example, we check the Common Name (CN) and Organizational info from the certificate.
        // In our client certificate, we set CN=AuthorizedDevice and Organization (O)=AuthorizedDevices.
        if (cert.subject && cert.subject.CN === 'AuthorizedDevice' && cert.subject.O === 'AuthorizedDevices') {
            authorized = true;
            console.log('Client authenticated via certificate:', cert.subject);
            // Inform the client that certificate-based authentication was accepted.
            ws.send(JSON.stringify({ type: 'auth', status: 'cert-accepted' }));
        } else {
            // If the certificate is present but not matching expected attributes, reject.
            console.log('Certificate present but not authorized:', cert.subject);
            ws.send(JSON.stringify({ type: 'auth', status: 'cert-rejected' }));
            ws.close();
            return;
        }
    } else {
        // No valid certificate was provided.
        console.log('No client certificate provided. Rejecting connection.');
        ws.send(JSON.stringify({ type: 'auth', status: 'no-cert' }));
        ws.close();
        return;
    }

    // Setup subscription for this connection.
    // For this example, we start with a "home" subscription.
    // In a more complex system, the client might send a message to change its subscription.
    ws.subscription = 'home';

    // In a production system, you might implement additional authorization logic here,
    // for example, checking local database entries or mapping certificate attributes to roles.

    // Send periodic updates based on the current subscription.
    const interval = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN && authorized) {
            // Retrieve data based on the subscription.
            // Here we only have one subscription ("home").
            let updateData = {};
            if (ws.subscription === 'home') {
                updateData = subscriptions.home.sendData();
            }
            // Send the update with a type field for the client to identify it.
            ws.send(JSON.stringify({ type: 'update', data: updateData }));
        }
    }, 2000); // Update every 2 seconds

    // Cleanup when connection closes.
    ws.on('close', () => {
        clearInterval(interval);
        console.log('Connection closed');
    });

    // Optionally, handle incoming messages (e.g., to change subscription)
    ws.on('message', (message) => {
        try {
            const msg = JSON.parse(message);
            // If the client wants to change the subscription
            if (msg.action === 'subscribe' && msg.view) {
                ws.subscription = msg.view;
                console.log(`Client changed subscription to: ${msg.view}`);
                ws.send(JSON.stringify({ type: 'subscription', status: 'subscribed', view: msg.view }));
            }
        } catch (error) {
            console.error('Error processing incoming message:', error);
        }
    });
});

// Express route for a simple HTTP test
app.get('/', (req, res) => {
    res.send('Industrial Secure WebSocket Server with mTLS and Subscription Model is running!');
});

// Start the HTTPS server on port 8080.
server.listen(8080, () => {
    console.log('Server is listening on port 8080 (wss://server.local:8080)');
});
