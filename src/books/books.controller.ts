import { Controller, Get, Post, Param, Body, Patch, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtGuard } from '../common/jwt.guard';
import { CurrentUser } from '../common/current-user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('cover', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + extname(file.originalname));
      }
    })
  }))
  async create(@UploadedFile() file: Express.Multer.File, @Body() body: any, @CurrentUser() user: any) {
    const data = { ...body, coverUrl: file ? `/uploads/${file.filename}` : null };
    return this.booksService.create(data);
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() body: any) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
