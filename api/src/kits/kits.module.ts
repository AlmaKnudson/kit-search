import { Module } from '@nestjs/common';
import { KitsController } from './kits.controller';
import { KitsService } from './kits.service';
import { FedexService } from 'src/fedex/fedex.service';

@Module({
  controllers: [KitsController],
  providers: [KitsService, FedexService],
})
export class KitsModule {}
