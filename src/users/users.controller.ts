import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from '../common/jwt.guard';
import { CurrentUser } from '../common/current-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtGuard)
  async me(@CurrentUser() user: { id: string }) {
    return this.usersService.findById(user.id);
  }
}
