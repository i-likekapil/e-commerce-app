import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './../schema/user.schema';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
