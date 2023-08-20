import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  Param,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { KitTrackingStatusDto } from './dtos/kit.tracking.status.dto';
import { KitsService } from './kits.service';

@ApiTags('API')
@Controller('kits')
export class KitsController {
  private readonly logger = new Logger(KitsController.name);
  constructor(private readonly kitsService: KitsService) {}

  @Get(':id/status')
  @ApiResponse({
    status: 200,
    description: 'The status of the kit.',
    type: KitTrackingStatusDto,
  })
  async lookupKitFedexStatusByTrackingNumber(
    @Param('id') kitId: string,
  ): Promise<KitTrackingStatusDto> {
    //Candidate for utility function parseIntOrThrow
    const kitIdNumber = parseInt(kitId, 10);
    if (isNaN(kitIdNumber)) {
      throw new BadRequestException(`Invalid kitId: ${kitId}`);
    }

    const kit = await this.kitsService.loadBiobotKitById(kitIdNumber);
    return this.kitsService.lookupKitFedexStatusByTrackingNumber(
      kit.shipping_tracking_code,
    );
  }

  @Get('')
  @ApiResponse({
    status: 200,
    description: 'A list of Biobot kits.',
    type: [Number],
  })
  async loadBiobotKits(): Promise<number[]> {
    this.logger.debug(`Loading all Biobot kits.`);
    return this.kitsService.loadBiobotKits();
  }
}
