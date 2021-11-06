import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { SALT } from 'src/common/config/constants.config';
import { UserRepository } from '../user/repository/user.repository';

const DUPLICATED_EMAIL_ERROR = 'A user with that email already exists';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}
  async register(user: RegisterDto) {
    try {
      if (await this.userRepository.findOneByEmail(user.email)) {
        throw new Error(DUPLICATED_EMAIL_ERROR);
      }

      const userToSave = {
        ...user,
        password: await this.hashPassword(user.password),
      };

      const newUser = await this.userRepository.saveUser(userToSave);

      return { data: newUser, statusCode: 200 };
    } catch ({ message }) {
      if (message === DUPLICATED_EMAIL_ERROR) {
        return { statusCode: 400, data: null };
      }

      return { statusCode: 500, data: null };
    }
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash(password, SALT);
  }

  private async passwordsMatch(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
