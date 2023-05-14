import { IsNotEmpty, IsNumber, IsString, MaxLength, IsDate } from "class-validator";

export class CreateCoinflipDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    createdBy: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @MaxLength(5)
    @IsNotEmpty()
    currency: string;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @IsString()
    @MaxLength(5)
    @IsNotEmpty()
    status: string;

    @IsString()
    @MaxLength(5)
    @IsNotEmpty()
    creatorChoose: string;
  }