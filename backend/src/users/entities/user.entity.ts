import { Exclude, Expose } from 'class-transformer';

export class UserEntity {
  @Expose()
  _id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
