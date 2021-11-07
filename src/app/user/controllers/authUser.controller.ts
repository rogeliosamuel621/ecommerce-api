import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { AuthUserService } from '../services/authUser.service';

@Controller('auth')
export class AuthUserController {
  constructor(private authUserService: AuthUserService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return await this.authUserService.register(body);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() body: LoginDto) {
    return await this.authUserService.login(body);
  }
}
