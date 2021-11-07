import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ minimum: 6 })
  @IsString()
  @IsNotEmpty()
  @Length(6)
  password: string;
}

export class LoginResponse {
  @ApiProperty()
  data: string;
}
