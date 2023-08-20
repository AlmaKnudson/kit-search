import { Module } from '@nestjs/common';
import { KitsModule } from './kits/kits.module';
import { FedexModule } from './fedex/fedex.module';

@Module({
  imports: [KitsModule, FedexModule],
})
export class AppModule {}
