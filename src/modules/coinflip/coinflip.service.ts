import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coinflip } from './schemas/coinflip.schema';
import { CreateCoinflipDto } from './dtos/create-coinflip.dto';

@Injectable()
export class CoinflipService {
  constructor(@InjectModel(Coinflip.name) private readonly coinflipModel: Model<Coinflip>) {}

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
      acceptedBy: null,    
      endedAt: null,
      status: "OPEN",
      result: null,
      winner: null
    });
    return newUser.save();
  }

  async updateCoinflip(coinflipId: string, updatedCoinflip: Coinflip): Promise<Coinflip> {
    return this.coinflipModel.findByIdAndUpdate(coinflipId, updatedCoinflip, { new: true });
  }

  async resolveCoinflip(coinflipId: string, rivalId: string): Promise<Coinflip> {
    const coinflip = await this.getCoinflipById(coinflipId);
    const endDate = new Date();
    const status = "CLOSED";
    const result = await this.flipCoin();
    const winner = coinflip.creatorChoose === result ? coinflip.createdBy : rivalId;

    const updatedCoinflip = {
      ...coinflip,
      endDate,
      status,
      result,
      winner
    }

    return this.coinflipModel.findByIdAndUpdate(coinflipId, updatedCoinflip, { new: true });
  }

  // SPECIFIC CRUD ACTIONS
  async flipCoin(): Promise<"Heads" | "Tails"> {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    return result;
  }
}