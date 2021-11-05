import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async login(@Body() body: RegisterDto, @Res() res: Response) {
    const { data, statusCode } = await this.authService.register(body);

    return res.status(statusCode).json({
      data: data,
    });
  }
}
