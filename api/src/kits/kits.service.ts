import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { FedexService, FedexTrackingResponse } from '../fedex/fedex.service';
import { KitTrackingStatusDto } from './dtos/kit.tracking.status.dto';
import { BIOBOT_KITS } from './mocks';
import { BiobotKitDto } from './dtos/kit.dto';

@Injectable()
export class KitsService {
  private readonly logger = new Logger(KitsService.name);
  constructor(private readonly fedexService: FedexService) {}

  async lookupKitFedexStatusByTrackingNumber(
    trackingNumber: string,
  ): Promise<KitTrackingStatusDto> {
    const trackingDetails: FedexTrackingResponse =
      await this.fedexService.getFedexTrackingDetails(trackingNumber);
    // Perform actions with trackingDetails, like matching the kit or handling the data as needed

    return {
      trackingNumber: trackingDetails.trackingNumber,
      statusDetails: {
        status: trackingDetails.latestStatusDetail.statusByLocale,
        description: trackingDetails.latestStatusDetail.description,
      },
    };
  }

  async loadBiobotKits(): Promise<number[]> {
    return BIOBOT_KITS.map((kit) => kit.id);
  }

  async loadBiobotKitById(id: number): Promise<BiobotKitDto> {
    this.logger.debug(`Loading Biobot kit ${id}.`);
    const kit = BIOBOT_KITS.find((kit) => kit.id === id);
    if (!kit) {
      throw new BadRequestException(`Kit ${id} not found.`);
    }
    this.logger.debug(`Loaded Biobot kit ${id}.`);
    return kit;
  }
}
