import { PrismaService } from '../database/prisma.service';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bookId: string;
        rating: number;
        reviewText: string | null;
        userId: string;
    }>;
    findForBook(bookId: string): Promise<({
        user: {
            email: string;
            username: string;
            password: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bookId: string;
        rating: number;
        reviewText: string | null;
        userId: string;
    })[]>;
}
