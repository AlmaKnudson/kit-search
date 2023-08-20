# Kits Module in Biobot API

The Kits module is responsible for managing and tracking kits within the Biobot system. This document outlines the structure and functionality of the Kits module.

## Components

### DTOs (Data Transfer Objects)

#### BiobotKitDto

Represents a Biobot kit with the following properties:

- `id`: The unique identifier for the kit (e.g., 1).
- `label_id`: The label ID associated with the kit (e.g., 'LBL12345').
- `shipping_tracking_code`: The shipping tracking code for the kit (e.g., '794971357442').

#### KitTrackingStatusDto

Represents the tracking status of a kit with the following properties:

- `trackingNumber`: The tracking number for the kit (e.g., '794971357442').
- `statusDetails`: An object containing details about the status of the kit.

### Controller

#### KitsController

Handles HTTP requests related to kits:

- `GET /kits/:id/status`: Retrieves the FedEx tracking status of a kit by its ID.
- `GET /kits`: Retrieves a list of all Biobot kits.

### Service

#### KitsService

Handles the business logic related to kits:

- `lookupKitFedexStatusByTrackingNumber`: Fetches the FedEx status for a given tracking number.
- `loadBiobotKits`: Loads a list of all Biobot kits.
- `loadBiobotKitById`: Loads a specific Biobot kit by its ID.

### Module

#### KitsModule

Defines the controllers and providers related to the Kits module.

## Dependencies

- `FedexService`: Used for fetching FedEx tracking details.

## Usage

### Example Request to Fetch Kit Status

```http
GET /kits/1/status
```

### Response

```json
{
  "trackingNumber": "794971357442",
  "statusDetails": {
    "status": "Picked up",
    "description": "Picked up and in transit"
  }
}
```

## Error Handling

Errors such as invalid kit IDs are handled with appropriate HTTP status codes and error messages.

## Logger

The Logger class is used for debugging and logging various activities within the controllers and services.
