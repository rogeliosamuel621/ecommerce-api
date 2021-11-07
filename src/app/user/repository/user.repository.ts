import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
import { TMongoId } from 'src/common/interfaces.common';
import { TRegisterUser } from '../interfaces/user.interface';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOneById(id: TMongoId, fields: string[] = [], options: QueryOptions) {
    return this.userModel.findById(id, [...fields], options);
  }

  async saveUser(user: TRegisterUser) {
    const newUser = new this.userModel(user);
    await newUser.save();
    return newUser;
  }

  findOneByEmail(email: string, fields?: string[]) {
    return this.userModel.findOne({ email: email }, fields);
  }
}
