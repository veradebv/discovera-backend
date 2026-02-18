import { PrismaService } from '../database/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        email: string;
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
