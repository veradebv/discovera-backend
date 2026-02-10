import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class LoginDto {
  @IsString()
  usernameOrEmail: string;

  @IsString()
  password: string;
}

export class AuthResponseDto {
  accessToken: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

export class JwtPayloadDto {
  sub: string;
  email: string;
  username: string;
}
