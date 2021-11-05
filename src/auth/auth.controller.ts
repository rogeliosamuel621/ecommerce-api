import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: LoginDto) {
    console.log(body);
  }
}
