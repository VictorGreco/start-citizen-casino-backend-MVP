import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // BASIC CRUD ACTIONS
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<any> {
    return this.userService.getUserById(userId);
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUser);
  }

  // @Put(':id')
  // async updateUser(@Param('id') userId: string, @Body() updatedUser: User): Promise<any> {
  //   return this.userService.updateUser(userId, updatedUser);
  // }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<any> {
    return this.userService.deleteUser(userId);
  }

  // SPECIFIC UPDATE ACTIONS


  @Put(':id/password')
  async updateUserPassword(@Param('id') userId: string, @Body() password: string): Promise<any> {
    return this.userService.updateUserPassword(userId, password);
  }

  @Put(':id/coins')
  async updateUserCoins(@Param('id') userId: string, @Body() coins: number): Promise<any> {
    return this.userService.updateUserCoins(userId, coins);
  }

  @Put(':id/tokens')
  async updateUserTokens(@Param('id') userId: string, @Body() tokens: number): Promise<any> {
    return this.userService.updateUserTokens(userId, tokens);
  }

  @Put(':id/verify')
  async updateUserVerification(@Param('id') userId: string): Promise<any> {
    return this.userService.updateUserVerification(userId);
  }
}