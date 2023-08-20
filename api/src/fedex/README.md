### FedEx Module

#### Introduction
The FedEx Module is a critical component designed to interface with the FedEx Tracking API. It allows for tracking packages through their unique tracking numbers. More details can be found in the [official FedEx Tracking API documentation](https://developer.fedex.com/api/en-us/catalog/track/v1/docs.html#operation/Track%20by%20Tracking%20Number).

#### Current State
As of now, the module is in a development phase and has only been stubbed out to ease integration with the kit search service. This module is designed to provide a FedEx service that can be utilized across various other modules, primarily within the "kits" module.

Please note that the current state of the fedex service only returns mocked data and does not perform actual tracking.

##### Planned Features
- **FedEx API Client**: A full-fledged client that will communicate with the FedEx API to fetch real tracking information.
- **Resilience**: Implementing resilience strategies including circuit breakers, retries, timeouts, rate limiting, etc., using [mollitia.js](https://genesys.github.io/mollitia/).
- **Caching**: A caching mechanism to enhance performance and efficiency.

#### Usage
While the full integration is under development, here's how you can currently use the FedEx Module:

```javascript
TODO
```
