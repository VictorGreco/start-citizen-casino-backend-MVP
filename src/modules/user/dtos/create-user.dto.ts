import { IsNotEmpty, IsNumber, IsString, MaxLength, IsBoolean } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    username: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    email: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    password: string;
  }