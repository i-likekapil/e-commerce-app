import { Controller, Get } from '@nestjs/common';
import { User } from '../schema/user.schema';
import { ApiService } from './api.service';

@Controller('api/v1')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }
  @Get('/users')
  getAllUsers(): Promise<User[]> {
    return this.apiService.findAll();
  }
}
