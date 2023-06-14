import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './../schema/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ApiService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  getHello(): string {
    return 'Hello World! from api service';
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createUser(user: User): Promise<User> {
    const res = this.userModel.create(user);
    return res;
  }
}
