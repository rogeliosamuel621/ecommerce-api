import { ObjectId } from 'mongoose';

export interface IDecoded {
  id: ObjectId;
  iat: number;
  exp: number;
}

export interface IPayload {
  id: ObjectId;
}
