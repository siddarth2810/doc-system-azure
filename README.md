# Doctor Appointment System

## Introduction
Welcome to the Doctor Appointment System! This application allows users to book appointments with doctors, manage their profiles, and provides an administrative interface for managing doctors and appointments. 

[Doc-appointment-demo.mkv](https://www.youtube.com/watch?v=cprrmRxr2PE)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features
- User Registration and Login
- Doctor Application Process
- Appointment Booking
- Doctor Profile Management
- Administrative Dashboard
- Notification System for New Appointments

## Tech Stack
- Frontend: React.js
- Backend: Node.js
- Database: MongoDB
- Deployment: Microsoft Azure
- CI/CD: GitHub Actions

## Installation
1. Clone the repository:
git clone https://github.com/siddarth2810/doc-system-azure.git

2. Navigate to the project directory:
cd doc-system-azure

3. Install dependencies:
npm install

4. Set up environment variables (refer to `.env.example` if provided)

5. Start the development server:
npm run dev


## Usage
1. **User Registration**: New users can register by providing their name, email, and password.
2. **User Login**: Registered users can log in using their email and password.
3. **Booking Appointments**: Users can view available doctors and book appointments by selecting a date and time.
4. **Doctor Application**: Users can apply to be registered as doctors through the "Apply Doctor" page.
5. **Doctor Profile**: Doctors can view and update their profiles, including fees and availability.
6. **Admin Dashboard**: Administrators can manage doctors, users, and approve doctor applications.

## CI/CD Pipeline
Implemented a CI/CD pipeline using GitHub Actions to automate the deployment process. Here's an overview of how it works:

1. **Trigger**: The workflow is triggered whenever a pull request is created or updated.

2. **Workflow Steps**:
   - Code checkout
   - Environment setup (Node.js, dependencies)
   - Running tests (if applicable)
   - Building the application
   - Deploying to Azure Web App

3. **Deployment**: Upon successful completion of the workflow, changes are automatically deployed to the Azure Web App.

To set up the CI/CD pipeline for your fork or similar project:

1. Set up secrets in your GitHub repository:
   - `AZURE_WEBAPP_NAME`: Your Azure Web App name
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Your Azure Web App publish profile

2. Modify the `.github/workflows/main.yml` file to fit your specific needs.

## Deployment
The application is currently deployed on Microsoft Azure and can be accessed at:
[https://doc-system.azurewebsites.net/](https://doc-system.azurewebsites.net/)

To deploy your own instance:
1. Create an Azure Web App
2. Configure your deployment settings in Azure
3. Set up the CI/CD pipeline as described above or deploy manually using Azure CLI or the Azure Portal

## Contribution

Thank you so much for taking the time to contribute. 
To make a contribution, you can open up an issue and let us know what you want to improve in the app, so that we can assign you to it.


## Code of Conduct
- Before opening up a new issue, please make sure that there is no duplicate issue regarding that topic.
- When making a pull request for the issue, make sure to write down the issue number with it, like for example `Fixing slow rendering bug #141`.
- Please keep the discussion civil and be respectful to all!!
