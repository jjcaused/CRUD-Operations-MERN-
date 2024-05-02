# Employee Management System

Welcome to the Employee Management System! This project provides a user-friendly interface for managing employee data and performing various administrative tasks.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Introduction

The Employee Management System is designed to streamline the process of managing employee information within an organization. It allows administrators to create, edit, and delete employee records, as well as perform other administrative tasks.

## Features

- **User Authentication:** Secure login functionality for administrators.
- **Employee Creation:** Ability to create new employee records with details such as name, email, phone number, designation, gender, and course.
- **Employee Editing:** Option to edit existing employee records to update information.
- **Employee Deletion:** Capability to delete employee records from the database.
- **Dashboard:** User-friendly dashboard interface for easy navigation.

## Technologies

- **Frontend:** React.js, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Usage

1. Access the application through the provided URL.
2. Log in using your credentials.
3. Use the dashboard to navigate to different sections of the application.
4. Create, edit, or delete employee records as needed.

## API Endpoints

- **POST /login:** User authentication endpoint.
- **POST /createEmp:** Endpoint for creating new employee records.
- **GET /getTable:** Endpoint for retrieving employee records.
- **DELETE /deleteEmp/:id:** Endpoint for deleting employee records.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests to help improve this project.

