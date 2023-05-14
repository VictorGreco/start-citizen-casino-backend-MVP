import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CoinflipService } from './coinflip.service';
import { CreateCoinflipDto } from './dtos/create-coinflip.dto';

@Controller('coinflip')
export class CoinflipController {
  constructor(private readonly coinflipService: CoinflipService) {}

  @Get()
  async getAllCoinflips(): Promise<any> {
    return await this.coinflipService.getAllCoinflips();
  }

  @Get(':id')
  async getCoinflipById(@Param('id') coinflipId: string): Promise<any> {
    return this.coinflipService.getCoinflipById(coinflipId);
  }

  @Post()
  async createCoinflip(@Body() createCoinflip: CreateCoinflipDto): Promise<any> {
    return this.coinflipService.createCoinflip(createCoinflip);
  }

  @Post(':id/resolve')
  async resolveCoinflip(@Param('id') coinflipId: string, @Body() rivalId: string): Promise<any> {

    return this.coinflipService.resolveCoinflip(coinflipId, rivalId);
  }
}
