import { ReviewsService } from './reviews.service';
export declare class ReviewsController {
    private reviewsService;
    constructor(reviewsService: ReviewsService);
    create(bookId: string, body: any, user: any): Promise<{
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
