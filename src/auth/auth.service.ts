import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { SALT } from 'src/common/config/constants.config';
import { DbUserService } from 'src/database/services/DbUser.service';
import { TRegisterUser } from 'src/common/interfaces.common';

const DUPLICATED_EMAIL_ERROR = 'A user with that email already exists';

@Injectable()
export class AuthService {
  constructor(private dbUserService: DbUserService) {}
  async register(user: RegisterDto) {
    try {
      if (await this.dbUserService.findOneByEmail(user.email)) {
        throw new Error(DUPLICATED_EMAIL_ERROR);
      }

      const userToSave: TRegisterUser = {
        ...user,
        password: await this.hashPassword(user.password),
      };

      const newUser = await this.dbUserService.saveUser(userToSave);

      return { data: newUser, statusCode: 200 };
    } catch (error) {
      if (error.message === DUPLICATED_EMAIL_ERROR) {
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
