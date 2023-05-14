import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { MongooseModule } from '@nestjs/mongoose';

import { CoinflipModule } from "./modules/coinflip/coinflip.module";
import { UserModule } from "./modules/user/user.module";


import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL || ""),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    CoinflipModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
