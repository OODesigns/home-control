# Home Control React Frontend

A smart, intuitive React web application designed for controlling your home’s ventilation system. With this application you can manage fan speeds and boost levels, choose between MVHR (Mechanical Ventilation with Heat Recovery) or Purging modes, or let the system auto-select the optimal mode. Additionally, real-time sensor notifications inform you exactly which sensor was triggered and where it’s located.


![front-screen](https://github.com/user-attachments/assets/696e734d-54b0-4f55-aca9-e46ede7da129)

# Table of Contents

    Overview

    Features

    Prerequisites

    Installation

    Running the Application

    Configuration

    Folder Structure

    Development Notes

    Customization & Contributing

    Troubleshooting

    License

    Acknowledgements

# Overview

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

    npm (or yarn)

    A modern web browser (Chrome, Firefox, or any equivalent)

# Installation

    Clone the repository:

git clone https://github.com/yourusername/home-control.git
cd home-control

Install dependencies:

If you’re using npm:

npm install

Or if you prefer yarn:

    yarn install

Running the Application
Development Server

To start the development server:

npm start

or if using yarn:

yarn start

Your application should now be running at http://localhost:3000. Enjoy watching live updates as you test the home-control features.
Production Build

To prepare the project for production:

npm run build

or with yarn:

yarn build

This command creates an optimized build in the build/ folder, which you can then deploy to your favorite hosting service.
Configuration
Mode Options

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


