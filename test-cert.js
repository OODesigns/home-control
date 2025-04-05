// test-cert.js
// This script tests the secure WebSocket server by connecting with a client certificate.
// It verifies that the server authenticates the connection and sends the expected "home" subscription updates.

const WebSocket = require('ws');
const fs = require('fs');

// Client certificate options for mTLS
const options = {
    cert: fs.readFileSync('./certs/client-cert.pem'), // Client certificate issued by our local CA
    key: fs.readFileSync('./certs/client-key.pem'),   // Client private key
    ca: fs.readFileSync('./certs/ca-cert.pem'),       // CA certificate (to verify server certificate)
};

// WebSocket URL for the secure server (adjust host as needed)
const wsUrl = 'wss://server.local:8080';

// Create a WebSocket connection using the client certificate
const ws = new WebSocket(wsUrl, options);

ws.on('open', () => {
    console.log('WebSocket connection opened');
});

ws.on('message', (data) => {
    console.log('Received:', data);
    try {
        const message = JSON.parse(data.toString());
        // Look for the authentication message
        if (message.type === 'auth') {
            if (message.status === 'cert-accepted') {
                console.log('Test passed: Certificate accepted');
            } else {
                console.error('Test failed: Authentication error:', message.status);
                ws.close();
                process.exit(1);
            }
        }
        // Check for update messages
        if (message.type === 'update') {
            // For the "home" subscription, expect temperature and sensor data.
            if (message.data.temperature && message.data.sensorData) {
                console.log('Received home subscription update:', message.data);
                // Optionally, exit after the first update for testing purposes.
                ws.close();
                process.exit(0);
            } else {
                console.error('Test failed: Unexpected update format');
                ws.close();
                process.exit(1);
            }
        }
    } catch (error) {
        console.error('Error parsing message:', error);
        ws.close();
        process.exit(1);
    }
});

ws.on('error', (err) => {
    console.error('WebSocket error:', err);
    process.exit(1);
});

ws.on('close', () => {
    console.log('WebSocket connection closed');
});
