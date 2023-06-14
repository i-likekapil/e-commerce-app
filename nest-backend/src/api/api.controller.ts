import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../schema/user.schema';
import { ApiService } from './api.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('api/v1/users')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('/test')
  getHello(): string {
    return this.apiService.getHello();
  }
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.apiService.findAll();
  }

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.apiService.createUser(user);
  }
}
