import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoinflipController } from './coinflip.controller';
import { CoinflipService } from './coinflip.service';

import { Coinflip, CoinflipSchema } from './schemas/coinflip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coinflip.name, schema: CoinflipSchema },
    ]),
  ],
  controllers: [CoinflipController],
  providers: [CoinflipService],
})
export class CoinflipModule {}
