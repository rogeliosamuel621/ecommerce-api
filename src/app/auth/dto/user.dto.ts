import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { TRegisterUser } from 'src/common/interfaces.common';

export class RegisterDto implements TRegisterUser {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  password: string;
}
