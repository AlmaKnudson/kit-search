# Biobot Kit Shipping Status Search System

This repository contains two main applications: a frontend application for user interactions and an API application to handle the backend logic.

## Frontend Application

The frontend application is a React-based web application that provides a user interface for searching and viewing the shipping status of Biobot kits.

### Features

- **Search Bar**: Enables users to search for kits by their unique identifiers.
- **Status View**: Displays the shipping status of the selected kit.

### Dependencies

- React
- react-autosuggest (would choose another package else if I were to do it again)

### Getting Started

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open your browser to `http://localhost:3000`.

## API Application (NestJS)

The API application is built using NestJS and is responsible for managing and tracking kits within the Biobot system.

### Endpoints

- `GET /kits/:id/status`: Retrieves the FedEx tracking status of a kit by its ID.
- `GET /kits`: Retrieves a list of all Biobot kits.

### Dependencies

- NestJS

### Getting Started

1. Navigate to the `api` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. API will be available at `http://localhost:3001`.

## Considerations

- The system is minimal and barebones, focusing on core functionality.
- There is minimal test coverage.
- Caching, resilience, containerization (e.g., Docker), and other advanced features are not implemented.
- The API exposes only the minimal data necessary for the functionality.


## TODOS

- **HTTP Resilience**: Implement features like retries, circuit breakers, rate limiting, etc., to enhance the robustness and have more standardized errors. 
- **Monorepo Setup**: Finish setting up the monorepo using tools like Lerna, Nx, or Turborepo to streamline development across multiple packages. This will allow for us to share types -- define them in one place and use them in all relevant apps. 
- **Containerization**: Dockerize the frontend and API applications to facilitate deployment, scaling, and ensure consistency across various environments.
- **FedEx API Integration**: Implement direct integration with the FedEx API for real-time tracking information instead of mocking the fedex response. 
- **Integration Testing**: Add comprehensive integration tests to validate the functionality across different parts of the system. Consider using a Dockerized environment for simulating real-world scenarios and dependencies.
- **E2E & Unit Testing**: Improve existing e2e and unit testing in the API app.
- **Client-Side Caching**: Implement client-side caching to reduce redundant network requests and improve the responsiveness of the user interface.
- **Authentication & Authorization**: Add user/clienta/account-based security. 
- **Logging & Monitoring**: Improve logging strategy.
- **Documentation**: Enahnce API documentation and developer guides, possibly add functionality for API client generation with resilience baked-in.
