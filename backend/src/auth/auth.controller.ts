import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: AuthDto, @Res() res: Response) {
    const { user, tokens } = await this.authService.login(authDto);
    const { refreshToken, accessToken } = tokens;
    res.cookie('refreshToken', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json({
      accessToken,
      user,
    });
  }

  @Post('registration')
  async registration(@Body() userDto: CreateUserDto, @Res() res: Response) {
    const { user, tokens } = await this.authService.registration(userDto);
    const { refreshToken, accessToken } = tokens;
    res.cookie('refreshToken', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json({
      accessToken,
      user,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('refreshToken');
    await this.authService.logout(req.user['sub']);
    return res.json({});
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshTokens(@Req() req: Request, @Res() res: Response) {
    const userId = req.user['sub'];
    const prevRefreshToken = req.cookies['refreshToken'];
    const { user, tokens } = await this.authService.refreshTokens(
      userId,
      prevRefreshToken,
    );
    const { refreshToken, accessToken } = tokens;
    res.cookie('refreshToken', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json({
      user,
      accessToken,
    });
  }
}
