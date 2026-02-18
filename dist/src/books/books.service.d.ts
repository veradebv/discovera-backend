import { PrismaService } from '../database/prisma.service';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
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
    update(id: string, data: any): Promise<{
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
