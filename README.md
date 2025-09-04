# Home Control React Frontend

A smart, intuitive React web application for controlling your home’s ventilation system.

![Front Screen](https://github.com/user-attachments/assets/696e734d-54b0-4f55-aca9-e46ede7da129)

---

## Features

- **Fan Speed & Boost Controls:**  Interactive sliders for precise control.
- **Mode Selection:**
  - Manual selection between MVHR or Purging modes.
  - Auto mode allows system-driven switching based on sensor input.
- **Real-time Sensor Notifications:** Instantly see which sensor was triggered and its location.
- **Responsive Design:**  100% SVG-based UI for perfect scaling on any screen.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [UX Design](#ux-design)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Operation Modes](#operation-modes)
- [Sensor Integration](#sensor-integration)
- [License](#license)

---

## Project Overview

This project is the front-end for a modern, scalable microservice-based home control system. It targets both web portals and kiosk devices, providing a unified, seamless user experience powered by React.

## Architecture

The system consists of several core components:

- **Web Portal & Kiosk (this project):**
  - React-based UI for web/kiosk control and monitoring
- **Java Backend Facade:**
  - Unified API gateway for authentication, request routing, and abstraction of microservices
- **Central Authentication Service:**
  - Handles user logins (web) and certificate-based authentication (kiosk)
- **System Controller:**
  - Manages all key system logic
- **Microservices:**
  - Specialized services for device integration, automation, and more

### High-Level Design

```
┌─────────────────────┐
│ Web Portal / Kiosk  │  (This Project)
└──────────┬──────────┘
           │ Requests              (REST)
           │  ▲
           │  │ Server-Sent Events (SSE)
           ▼  │
┌──────────────────────────────────────┐
│         Java Backend Facade          │
└──────────────────────────────────────┘
           │ Requests              (gRPC)
           ▼
┌────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       Microservices                                        │
│                                                                                            │
│  ┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐ │
│  │     System Controller   │    │   Central Auth System   │    │  Device Integrations    │ │
│  └─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Technology Stack
- **Frontend:** React
- **Backend Facade:** Java
- **Microservices:** Java, Python
- **Authentication:** Central custom microservice

## UX Design

The interface is designed with user-friendliness and efficiency in mind. Main functions include:

- Adjust fan speed and boost power.
- Select MVHR, Purging, or Auto ventilation mode.
- Receive live notifications about sensor events.
- View clear, scalable SVG-based visuals.

The UI is fully responsive and works across all devices.

### Example Use Cases
- Manually set your preferred ventilation mode.
- Let the system automatically optimize ventilation.
- Instantly respond to alerts from home sensors.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)
- Modern Web Browser (Chrome, Firefox, etc.)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/home-control.git
   cd home-control
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
    - Application will run at [http://localhost:3000](http://localhost:3000)

4. **Production build:**
   ```bash
   npm run build
   ```

---

## Operation Modes

- **Manual Mode:** User selects MVHR or Purging.
- **Auto Mode:** System chooses optimal mode based on live sensor data.
- **Fan Controls:** Adjust speed and boost using the interactive UI.

## Sensor Integration

Integrated sensors monitor your home and trigger alerts. For every sensor event:

- The triggered sensor and its location are displayed.
- You can quickly identify and respond to any potential issue.

---

## License

This project is provided as-is for personal, non-commercial use. For licensing or commercial use, contact the author.
