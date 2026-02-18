import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { RegisterDto, LoginDto, AuthResponseDto } from './auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<AuthResponseDto>;
    login(loginDto: LoginDto): Promise<AuthResponseDto>;
}
