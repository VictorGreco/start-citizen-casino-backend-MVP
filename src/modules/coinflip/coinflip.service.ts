import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coinflip } from './schemas/coinflip.schema';
import { CreateCoinflipDto } from './dtos/create-coinflip.dto';

@Injectable()
export class CoinflipService {
  constructor(
    @InjectModel(Coinflip.name) private readonly coinflipModel: Model<Coinflip>,
  ) {}

  // BASIC USER CRUD
  async getAllCoinflips(): Promise<Coinflip[]> {
    return this.coinflipModel.find();
  }

  async getCoinflipById(coinflipId: string): Promise<Coinflip> {
    return this.coinflipModel.findById(coinflipId);
  }

  async createCoinflip(coinflip: CreateCoinflipDto): Promise<Coinflip> {
    const newUser = new this.coinflipModel({
      ...coinflip,
      createdAt: new Date(),
      acceptedBy: null,
      endedAt: null,
      status: 'STARTED',
      result: null,
      winner: null,
    });
    return newUser.save();
  }

  async updateCoinflip(
    coinflipId: string,
    updatedCoinflip: Coinflip,
  ): Promise<Coinflip> {
    return this.coinflipModel.findByIdAndUpdate(coinflipId, updatedCoinflip, {
      new: true,
    });
  }

  async resolveCoinflip(
    coinflipId: string,
    acceptedBy: string,
  ): Promise<Coinflip> {
    const coinflip = await this.getCoinflipById(coinflipId);
    const endedAt = new Date();
    const status = 'CLOSED';
    const result = this.flipCoin();
    const winner =
      coinflip.creatorChoose === result ? coinflip.createdBy : acceptedBy;

    console.log(coinflip.creatorChoose);
    console.log(result);
    console.log(coinflip.creatorChoose === result);

    const partial = {
      acceptedBy,
      endedAt,
      status,
      result,
      winner,
    };

    const updatedCoinflip = Object.assign(coinflip, partial);

    return this.coinflipModel.findByIdAndUpdate(coinflipId, updatedCoinflip, {
      new: true,
    });
  }

  // SPECIFIC CRUD ACTIONS
  flipCoin(): string {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    return result;
  }
}
