import { Controller, Post, Body, UseGuards, Param, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtGuard } from '../common/jwt.guard';
import { CurrentUser } from '../common/current-user.decorator';

@Controller('books/:bookId/reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(JwtGuard)
  async create(@Param('bookId') bookId: string, @Body() body: any, @CurrentUser() user: any) {
    return this.reviewsService.create(user.id, { ...body, bookId });
  }

  @Get()
  async findForBook(@Param('bookId') bookId: string) {
    return this.reviewsService.findForBook(bookId);
  }
}
