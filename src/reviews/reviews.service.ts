import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: any) {
    const { bookId, rating, reviewText } = data;

    // Ensure user hasn't already reviewed this book
    const existing = await this.prisma.review.findUnique({ where: { userId_bookId: { userId, bookId } } });
    if (existing) throw new BadRequestException('User has already reviewed this book');

    return this.prisma.review.create({ data: { userId, bookId, rating, reviewText } });
  }

  async findForBook(bookId: string) {
    return this.prisma.review.findMany({ where: { bookId }, include: { user: true } });
  }
}
