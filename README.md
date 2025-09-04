# Home Control React Frontend

A smart, intuitive React web application designed for controlling your home’s ventilation system. With this application you can manage fan speeds and boost levels, choose between MVHR (Mechanical Ventilation with Heat Recovery) or Purging modes, or let the system auto-select the optimal mode. Additionally, real-time sensor notifications inform you exactly which sensor was triggered and where it’s located.

The UI is design using SVG only, so it is totally scalable, allowing to fix any screen as required. 

This is a start of a home control system I am making;

![front-screen](https://github.com/user-attachments/assets/696e734d-54b0-4f55-aca9-e46ede7da129)

# How it fits together

**Web Portal & Kiosk System**
This is part of a full-stack application for the Web Portal and Kiosk System. The architecture is designed to be a modern, scalable microservice-based system with a clear separation of concerns between the user-facing front-end, a back-end facade, and the core microservices.

**Architecture Overview**

The system is composed of several key components that work together to provide a seamless user experience and secure communication. The front-end, built with React, serves as the user interface for both the Web Portal and the Kiosk Device. This front-end communicates with a Java-based facade, which in turn routes requests to a set of underlying microservices.

Key Components

    Web Portal (this project): A front-end application built with React, providing a user interface for managing and interacting with the system. It handles user authentication through the Auth Service.

    Kiosk Device (this project): A physical device that runs a front-end application (also built with React) similar to the Web Portal, but with specific functionality for the kiosk environment. It uses a certificate-based authentication method with the Auth Service.

    Java Backend Facade: This facade acts as a single point of entry for the front-end applications, routing requests to the appropriate microservices. It simplifies the front-end's interaction with the system by abstracting the microservice architecture, including s centralized backend service.

    Central Authentication Service: A dedicated microservice responsible for all authentication and authorization within the system. It manages user logins for the Web Portal and handles certificate-based authentication for the Kiosk Device. It contains a Token Issuer, Refresh Manager, and a User DB / M2M Store for managing credentials and tokens.

    System Controller: It's responsible for managing and orchestrating the system's core functions. 

Technology Stack

    Frontend: React

    Backend Facade: Java

    Microservices: Java, Python

    Authentication: Central Authentication Service (custom microservice)

# High level Design

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

# The UX Design

This project provides a user-friendly interface to control key aspects of your home’s ventilation system. Using intuitive controls, you can:

    Adjust the fan speed and boost levels.

    Manually select between MVHR and Purging modes, or use the auto mode to let the system decide based on sensor input.

    View live alerts from sensors, indicating exactly which sensor was triggered and in what area.

Whether you’re a tech enthusiast or a homeowner looking for a simplified smart home control, this React frontend makes managing your home environment both simple and efficient.
Features

    Fan Speed & Boost Controls:
    Easily adjust the fan speed and boost power with interactive sliders.

    Mode Selection:

        Manual Mode: Directly choose between MVHR and Purging.

        Auto Mode: Allow the system to automatically select the most appropriate mode based on sensor data.

    Sensor Notifications:
    Real-time display of sensor triggers, including sensor identification and location details, ensuring you’re always informed of environmental changes.

    Responsive Design:
    A clean, modern UI built with React that works seamlessly on both desktop and mobile devices.

# Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (version 14 or above recommended)

    npm

    A modern web browser (Chrome, Firefox, or any equivalent)

# Installation
git clone https://github.com/yourusername/home-control.git
cd home-control

Install dependencies: npm install
Running the Application
To start the development server: npm start 

Your application should now be running at http://localhost:3000. Enjoy watching live updates as you test the home-control features.
Production Build

# Operation
The application supports three main configurations for operation:

    Manual Mode:
    You choose whether to use MVHR or Purging.

    Auto Mode:
    The system automatically selects between MVHR and Purging based on sensor input. This is perfect for adapting to real-time conditions.

    Fan Controls:
    Adjust the fan’s speed and boost level using sliders or buttons, to customize your home’s ventilation based on your comfort needs.

Sensor Integration

Sensors are integrated to monitor home conditions and trigger alerts. When a sensor is activated:

    The system displays a notification identifying which sensor was triggered.

    You see the exact location in your home where the trigger occurred, allowing for quick troubleshooting or environmental adjustments.
 

