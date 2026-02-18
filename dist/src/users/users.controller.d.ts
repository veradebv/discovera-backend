import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    me(user: {
        id: string;
    }): Promise<{
        email: string;
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
