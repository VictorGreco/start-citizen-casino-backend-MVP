import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Coinflip } from '../../schemas/coinflip.schema';
import { CreateCoinflipDto } from './dtos/create-coinflip.dto';

@Injectable()
export class CoinflipService {
  constructor (@InjectModel(Coinflip.name) private coinflipModel: Model<Coinflip>) {}

  async create(createCoinflipDto: CreateCoinflipDto): Promise<Coinflip> { // TODOS: https://medium.com/globant/crud-application-using-nestjs-and-mongodb-99a0756adb76
    const createdCoinflip = new this.coinflipModel(createCoinflipDto);
    return createdCoinflip.save();
  }

  getHello(): string {
    return 'Hello Coinflip!';
  }
}
