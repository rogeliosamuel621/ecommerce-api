import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
import { TMongoId } from 'src/common/interfaces.common';
import { IUser, User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class DbUserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOneById(id: TMongoId, fields: string[] = [], options: QueryOptions) {
    return this.userModel.findById(id, [...fields], options);
  }

  async saveUser(user: IUser) {
    if (this.findOneByEmail(user.email)) {
      throw new Error('A user with that email already exists');
    }

    const newUser = new this.userModel(user);
    await newUser.save();
  }

  private findOneByEmail(email: string, fields?: string[]) {
    return this.userModel.findOne({ email: email }, fields);
  }
}
