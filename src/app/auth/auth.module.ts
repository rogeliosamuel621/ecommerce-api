import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [UserModule, JwtModule.register({ secret: 'secret' })],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
