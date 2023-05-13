import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Coinflip } from './schemas/coinflip.schema';
import { CreateCoinflipDto } from './dtos/create-coinflip.dto';

@Injectable()
export class CoinflipService {
  constructor (@InjectModel(Coinflip.name) private coinflipModel: Model<Coinflip>) {}

  async create(createCoinflipDto: CreateCoinflipDto): Promise<Coinflip> {
    const createdCoinflip = new this.coinflipModel(createCoinflipDto);
    return createdCoinflip.save();
  }

  async getAll(): Promise<Coinflip[]> {
    const coinflipsData = await this.coinflipModel.find();
    return coinflipsData;
  }

  getHello(): string {
    return 'Hello Coinflip!';
  }
}
