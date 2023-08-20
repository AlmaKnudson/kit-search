import { Injectable, Logger } from '@nestjs/common';
import { faker } from '@faker-js/faker';

export type FedexTrackingResponse = {
  trackingNumber: string;
  latestStatusDetail: {
    statusByLocale: string;
    description: string;
    // ... other properties
  };
  // ... other properties
};

@Injectable()
export class FedexService {
  private readonly logger = new Logger(FedexService.name);

  async getFedexTrackingDetails(
    trackingNumber: string,
  ): Promise<FedexTrackingResponse> {
    this.logger.log('Attempting to fetch FedEx tracking details (mocked).');
    try {
      // TODO: Implement FedEx API call
      // Commenting out the real API call
      // See https://developer.fedex.com/api/en-us/catalog/track/v1/docs.html#operation/Track%20by%20Tracking%20Number
      // For api spec
      // const response = await axios.post(...);

      // Generating mocked response data
      const response = this.generateMockedResponse(trackingNumber);

      this.logger.log(
        'Successfully retrieved FedEx tracking details (mocked).',
      );
      return response;
    } catch (error) {
      this.logger.error(
        'Failed to fetch FedEx tracking details.',
        error.toString(),
      );
      console.error(error); // You might want to replace this with further error handling
    }
  }

  generateMockedResponse(trackingNumber: string): FedexTrackingResponse {
    const status = faker.lorem.word();
    const description = faker.lorem.sentence();

    return {
      trackingNumber,
      // ... other properties
      latestStatusDetail: {
        statusByLocale: status,
        description: description,
        // ... other properties
      },
    };
  }
}
