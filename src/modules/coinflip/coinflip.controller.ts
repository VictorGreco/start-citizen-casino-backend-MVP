import { Controller, Get } from '@nestjs/common';
import { CoinflipService } from './coinflip.service';

@Controller('coinflip')
export class CoinflipController {
  constructor(private readonly coinflipService: CoinflipService) {}

  @Get()
  getHello(): string {
    return this.coinflipService.getHello();
  }
}
