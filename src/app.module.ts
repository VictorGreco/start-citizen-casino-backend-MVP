import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { CoinflipModule } from "./modules/coinflip/coinflip.module";

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL || ""),
    CoinflipModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
