import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        RefreshTokenStrategy.extractJWTFromCookie,
      ]),
      secretOrKey: process.env.REFRESH_JWT_SECRET,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  private static extractJWTFromCookie(req: Request): string | null {
    if (
      req.cookies &&
      'refreshToken' in req.cookies &&
      req.cookies.refreshToken.length > 0
    ) {
      return req.cookies.refreshToken;
    }
    return null;
  }

  validate(req: Request, payload: any) {
    const { refreshToken } = req.cookies;
    return { ...payload, refreshToken };
  }
}
