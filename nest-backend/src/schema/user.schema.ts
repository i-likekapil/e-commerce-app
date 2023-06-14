import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  type: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
