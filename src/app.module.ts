import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './database/prisma.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { ReviewsController } from './reviews/reviews.controller';
import { ReviewsService } from './reviews/reviews.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }) , AuthModule],
  controllers: [AppController, BooksController, ReviewsController, UsersController],
  providers: [AppService, PrismaService, BooksService, ReviewsService, UsersService],
})
export class AppModule {}
