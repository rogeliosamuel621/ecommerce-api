import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
import { TMongoId, TRegisterUser } from 'src/common/interfaces.common';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class DbUserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOneById(id: TMongoId, fields: string[] = [], options: QueryOptions) {
    return this.userModel.findById(id, [...fields], options);
  }

  async saveUser(user: TRegisterUser) {
    console.log(user);

    const newUser = new this.userModel(user);
    await newUser.save();
  }

  async findOneByEmail(email: string, fields?: string[]) {
    console.log(await this.userModel.findOne({ email: email }, fields));

    return this.userModel.findOne({ email: email }, fields);
  }
}
