import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  // BASIC USER CRUD
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(userId: string): Promise<User> {
    return this.userModel.findById(userId);
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({
      ...user,
      isVerified: false,
      tokens: 0,
      coins: 0
    });
    return newUser.save();
  }

  // async updateUser(userId: string, updatedUser: User): Promise<User> {
  //   return this.userModel.findByIdAndUpdate(userId, updatedUser, { new: true });
  // }

  async deleteUser(userId: string): Promise<any> {
    return this.userModel.findByIdAndDelete(userId);
  }

  //SPECIFIC UPDATE ACTIONS
  async updateUserPassword(userId: string, password: string): Promise<User> {
    const user = await this.getUserById(userId);

    return this.userModel.findByIdAndUpdate(userId, {
      ...user,
      password
    }, { new: true });
  }

  async updateUserTokens(userId: string, tokens: number): Promise<User> {
    const user = await this.getUserById(userId);

    return this.userModel.findByIdAndUpdate(userId, {
      ...user,
      tokens
    }, { new: true });
  }

  async updateUserCoins(userId: string, coins: number): Promise<User> {
    const user = await this.getUserById(userId);

    return this.userModel.findByIdAndUpdate(userId, {
      ...user,
      coins
    }, { new: true });
  }

  async updateUserVerification(userId: string): Promise<User> {
    const user = await this.getUserById(userId);

    return this.userModel.findByIdAndUpdate(userId, {
      ...user,
      isVerified: true
    }, { new: true });
  }
}