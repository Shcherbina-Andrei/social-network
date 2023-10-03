import { AuthorizationStatus } from '@/shared/consts/authorization-status';
import { User } from '@/entities/user';

export interface UserRegistration {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface AuthRes {
  user: User;
  accessToken: string;
}

export interface AuthSchema {
  authorizationStatus: AuthorizationStatus;
}
