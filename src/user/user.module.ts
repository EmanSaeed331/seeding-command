import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import { UserSeed } from './user.seed';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    CommandModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserSeed],
  exports: [UserSeed],
})
export class UserModule {}
