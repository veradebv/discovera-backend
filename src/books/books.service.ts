import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.book.create({ data });
  }

  async findAll() {
    return this.prisma.book.findMany({ include: { reviews: true } });
  }

  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({ where: { id }, include: { reviews: true } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, data: any) {
    return this.prisma.book.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
