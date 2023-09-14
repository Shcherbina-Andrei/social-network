import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserService } from 'src/users/user.service';
import { ConfigService } from '@nestjs/config';
import { compareHashedData, hashData } from 'src/common/helpers/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(authDto: AuthDto): Promise<any> {
    const user = await this.validateUser(authDto);
    const tokens = await this.getTokens(user._id, user.username);
    await this.updateRefreshToken(user._id, tokens.refreshToken);
    return tokens;
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.findByEmail(userDto.email);

    if (candidate) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await hashData(userDto.password, 5);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    const tokens = await this.getTokens(user._id, user.username);
    await this.updateRefreshToken(user._id, tokens.refreshToken);
    return tokens;
  }

  async logout(userId: string) {
    return this.userService.update(userId, { refreshToken: null });
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.userService.findById(userId);
    if (!user || !refreshToken) throw new ForbiddenException('Access denied');

    const refreshTokenMatches = await compareHashedData(
      refreshToken,
      user.refreshToken,
    );

    if (!refreshTokenMatches) throw new ForbiddenException('Access denied');

    const tokens = await this.getTokens(user._id, user.username);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async getTokens(userId: string, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, username },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, username },
        {
          secret: this.configService.get<string>('REFRESH_JWT_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await hashData(refreshToken, 5);
    await this.userService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  private async validateUser(authData: AuthDto) {
    const user = await this.userService.findByEmail(authData.email);
    const passwordEquals = await compareHashedData(
      authData.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }
}
