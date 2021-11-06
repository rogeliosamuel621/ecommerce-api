import { IUser } from 'src/app/user/interfaces/user.interface';

export type TRegisterUser = Pick<
  IUser,
  'email' | 'password' | 'firstName' | 'lastName'
>;
