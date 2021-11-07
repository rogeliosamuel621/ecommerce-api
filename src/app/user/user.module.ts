import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUserController } from './controllers/authUser.controller';
import { UserRepository } from './repository/user.repository';
import { User, UserSchema } from './schema/user.schema';
import { AuthUserService } from './services/authUser.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController, AuthUserController],
  providers: [UserService, UserRepository, AuthUserService],
  exports: [UserRepository],
})
export class UserModule {}
