import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from '../dto/user.dto';
import { AuthUserService } from '../services/authUser.service';

@Controller('auth')
export class AuthUserController {
  constructor(private authUserService: AuthUserService) {}
  @Post('register')
  async login(@Body() body: RegisterDto) {
    return await this.authUserService.register(body);
  }
}
