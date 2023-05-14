import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class DeleteUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  username: string;
}
