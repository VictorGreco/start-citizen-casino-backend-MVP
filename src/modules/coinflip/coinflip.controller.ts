import { Controller, Get, Post } from '@nestjs/common';
import { CoinflipService } from './coinflip.service';

@Controller('coinflip')
export class CoinflipController {
  constructor(private readonly coinflipService: CoinflipService) {}

  @Get()
  getHello(): string {
    return this.coinflipService.getHello();
  }

  @Get("/all")
  async getAllCoinflips(): Promise<any> {
    return await this.coinflipService.getAll();
  }

  @Post("/new")
  async createCoinflip(): Promise<any> {
    return await this.coinflipService.create({
      createdBy: "1",
      amount: 1000,
      currency: "ISK",
      createdAt: new Date(),
      status: "CREATED"
    });
  }
}
