import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UserService } from './user.service';

@Injectable()
export class UserSeed {
  constructor(private readonly userService: UserService) {}

  @Command({
    command: 'create:user',
    describe: 'create a user',
  })
  async create() {
    const user = await this.userService.create({
      username: 'SuperAdmin',
      email: 'SuperAdmin@superadmin.com',
    });
    console.log(user);
  }
}
