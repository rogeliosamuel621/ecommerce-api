import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT } from 'src/common/config/constants.config';
import { UserRepository } from '../user/repository/user.repository';
import { HttpResponse } from 'src/common/utils/HttpResponse.util';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../user/dto/register.dto';
import { TPayload } from './interfaces/auth.interfaces';

const DUPLICATED_EMAIL_ERROR = 'A user with that email already exists';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}
  async register(user: RegisterDto) {
    if (await this.userRepository.findOneByEmail(user.email)) {
      throw new BadRequestException(DUPLICATED_EMAIL_ERROR);
    }

    const userToSave = {
      ...user,
      password: await this.hashPassword(user.password),
    };

    const newUser = await this.userRepository.saveUser(userToSave);

    return new HttpResponse(newUser);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, SALT);
  }

  async passwordsMatch(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    const user = await this.userRepository.findOneByEmail(email);

    return Boolean(user);
  }

  createJWT(payload: TPayload): string {
    return this.jwtService.sign(payload, { expiresIn: '3d' });
  }

  verifyJWT(token: string): TPayload {
    return this.jwtService.verify<TPayload>(token);
  }
}
