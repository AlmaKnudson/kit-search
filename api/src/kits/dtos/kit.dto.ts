import { ApiProperty } from '@nestjs/swagger';

export class BiobotKitDto {
  @ApiProperty({
    description: 'The unique identifier for the kit.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The label ID associated with the kit.',
    example: 'LBL12345',
  })
  label_id: string;

  @ApiProperty({
    description: 'The shipping tracking code for the kit.',
    example: '794971357442',
  })
  shipping_tracking_code: string;
}
