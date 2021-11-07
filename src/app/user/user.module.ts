import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUserController } from './controllers/authUser.controller';
import { UserRepository } from './repository/user.repository';
import { User, UserSchema } from './schema/user.schema';
import { AuthUserService } from './services/authUser.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthUserController],
  providers: [UserRepository, AuthUserService],
  exports: [UserRepository],
})
export class UserModule {}
