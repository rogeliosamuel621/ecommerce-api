import { IUser } from 'src/app/user/interfaces/user.interface';
import { TMongoId } from 'src/common/interfaces.common';

export type TRegisterUser = Pick<
  IUser,
  'email' | 'password' | 'firstName' | 'lastName'
>;

export type TPayload = {
  id: TMongoId;
};
