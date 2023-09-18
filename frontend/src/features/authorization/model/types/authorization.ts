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
