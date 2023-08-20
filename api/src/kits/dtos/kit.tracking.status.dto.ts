import { ApiProperty } from '@nestjs/swagger';

class StatusDetails {
  @ApiProperty({
    description: 'The current status of the kit.',
    example: 'Picked up',
  })
  status: string;

  @ApiProperty({
    description: 'A detailed description of the current status.',
    example: 'Picked up and in transit',
  })
  description: string;
}

export class KitTrackingStatusDto {
  @ApiProperty({
    description: 'The tracking number for the kit.',
    example: '794971357442',
  })
  trackingNumber: string;

  @ApiProperty({
    description: 'Details about the status of the kit.',
    type: StatusDetails,
  })
  statusDetails: StatusDetails;
}
