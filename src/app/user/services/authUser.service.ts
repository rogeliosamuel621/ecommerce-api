import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/app/auth/auth.service';
import { TPayload } from 'src/app/auth/interfaces/auth.interfaces';
import { HttpResponse } from 'src/common/utils/HttpResponse.util';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { UserRepository } from '../repository/user.repository';

const DUPLICATED_EMAIL_ERROR = 'A user with that email already exists';

@Injectable()
export class AuthUserService {
  constructor(
    private authService: AuthService,
    private userRepository: UserRepository,
  ) {}
  async register(user: RegisterDto): Promise<HttpResponse<string>> {
    const userAlreadyExists = await this.authService.emailAlreadyExists(
      user.email,
    );

    if (userAlreadyExists) {
      throw new BadRequestException(DUPLICATED_EMAIL_ERROR);
    }

    const userToSave: RegisterDto = {
      ...user,
      password: await this.authService.hashPassword(user.password),
    };

    const newUser = await this.userRepository.saveUser(userToSave);

    const payload: TPayload = {
      id: newUser._id,
    };

    const token = this.authService.createJWT(payload);

    return new HttpResponse<string>(token);
  }

  async login({ email, password }: LoginDto): Promise<HttpResponse<string>> {
    const userByEmail = await this.userRepository.findOneByEmail(email, [
      'password',
    ]);

    if (!userByEmail) throw new UnauthorizedException('Wrong credentials');

    const passwordsMatch = await this.authService.passwordsMatch(
      password,
      userByEmail.password,
    );

    if (!passwordsMatch) throw new UnauthorizedException('Wrong credentials');

    const payload: TPayload = {
      id: userByEmail._id,
    };

    const token = this.authService.createJWT(payload);

    return new HttpResponse<string>(token);
  }
}
