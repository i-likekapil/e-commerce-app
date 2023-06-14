import { Role } from '../schema/user.schema';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly type: Role;
}
