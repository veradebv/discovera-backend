import { BooksService } from './books.service';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    create(file: Express.Multer.File, body: any, user: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string | null;
        coverUrl: string | null;
        isbn: string | null;
        publishedAt: Date | null;
    }>;
    findAll(): Promise<({
        reviews: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bookId: string;
            rating: number;
            reviewText: string | null;
            userId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string | null;
        coverUrl: string | null;
        isbn: string | null;
        publishedAt: Date | null;
    })[]>;
    findOne(id: string): Promise<{
        reviews: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bookId: string;
            rating: number;
            reviewText: string | null;
            userId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string | null;
        coverUrl: string | null;
        isbn: string | null;
        publishedAt: Date | null;
    }>;
    update(id: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string | null;
        coverUrl: string | null;
        isbn: string | null;
        publishedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string | null;
        coverUrl: string | null;
        isbn: string | null;
        publishedAt: Date | null;
    }>;
}
