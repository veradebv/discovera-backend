import { Strategy } from 'passport-jwt';
import { JwtPayloadDto } from './auth.dto';
import { PrismaService } from '../database/prisma.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: JwtPayloadDto): Promise<{
        id: string;
        email: string;
        username: string;
    } | null>;
}
export {};
