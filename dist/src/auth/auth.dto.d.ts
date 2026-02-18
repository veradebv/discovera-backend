export declare class RegisterDto {
    email: string;
    username: string;
    password: string;
}
export declare class LoginDto {
    usernameOrEmail: string;
    password: string;
}
export declare class AuthResponseDto {
    accessToken: string;
    user: {
        id: string;
        email: string;
        username: string;
    };
}
export declare class JwtPayloadDto {
    sub: string;
    email: string;
    username: string;
}
