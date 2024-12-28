import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Strategy, ExtractJwt } from 'passport-jwt';

import { UserRepository } from 'domain/repositories/UserRepository';

import { env } from 'infrastructure/env';
import { PayloadJwtDTO } from 'infrastructure/http/guard/dtos/PayloadJwtDTO';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      ignoreExpiration: false,
      secretOrKey: env.SECRET_TOKEN,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: PayloadJwtDTO) {
    const { id } = payload;

    const user = await this.userRepository.findUnique({
      where: { id },
    });

    if (!user) {
      throw new UnauthorizedException('invalid token');
    }

    return user;
  }
}
