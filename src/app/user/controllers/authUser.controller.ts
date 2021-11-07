import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginDto, LoginResponse } from '../dto/login.dto';
import { RegisterDto, RegisterResponse } from '../dto/register.dto';
import { AuthUserService } from '../services/authUser.service';

@ApiTags('users')
@Controller('auth')
export class AuthUserController {
  constructor(private authUserService: AuthUserService) {}

  @Post('register')
  @ApiBadRequestResponse({ description: 'User with that email already exists' })
  @ApiCreatedResponse({ description: 'user created', type: LoginResponse })
  async register(@Body() body: RegisterDto) {
    return await this.authUserService.register(body);
  }

  @Post('login')
  @HttpCode(200)
  @ApiUnauthorizedResponse({ description: 'Wrong credentials' })
  @ApiOkResponse({
    description: 'user logged successfully',
    type: RegisterResponse,
  })
  async login(@Body() body: LoginDto) {
    return await this.authUserService.login(body);
  }
}
