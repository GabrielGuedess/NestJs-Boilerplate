import { JwtService } from '@nestjs/jwt';
import { HttpStatus, Injectable } from '@nestjs/common';

import dayjs from 'dayjs';
import { compare } from 'bcrypt';
import { GraphQLError } from 'graphql';

import { type AuthRepository } from 'domain/repositories/AuthRepository';
import {
  type SignInRequestDTO,
  type SignInResponseDTO,
  type RefreshTokenRequestDTO,
  type RefreshTokenResponseDTO,
} from 'domain/dtos/repositories/AuthRepositoryDTO';

import { env } from 'infrastructure/env';
import { PrismaService } from 'infrastructure/database/prisma/prisma.service';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async refreshToken(
    credentials: RefreshTokenRequestDTO,
  ): Promise<RefreshTokenResponseDTO> {
    const user = await this.prisma.user.findUnique({
      where: { id: credentials.id, email: credentials.email },
    });

    if (!user) {
      throw new GraphQLError('Invalid token!', {
        extensions: { code: HttpStatus.UNAUTHORIZED },
      });
    }

    const payload = {
      id: user.id,
      document: user.document,
    };

    return {
      token_expires: dayjs().add(15, 'minutes').toDate(),
      token: await this.jwtService.signAsync(payload, {
        secret: env.SECRET_TOKEN,
        expiresIn: env.EXPIRES_TOKEN,
      }),
    };
  }

  async signIn(credentials: SignInRequestDTO): Promise<SignInResponseDTO> {
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user) {
      throw new GraphQLError('E-mail not found!', {
        extensions: { code: HttpStatus.UNAUTHORIZED },
      });
    }

    const shouldPasswordMatch = await compare(
      credentials.password,
      user.password,
    );

    if (!shouldPasswordMatch) {
      throw new GraphQLError('Password incorrect!', {
        extensions: { code: HttpStatus.UNAUTHORIZED },
      });
    }

    const payload = {
      id: user.id,
      document: user.document,
    };

    return {
      user_id: user.id,
      token_expires: dayjs().add(15, 'minutes').toDate(),
      refresh_token_expires: dayjs().add(1, 'month').toDate(),
      token: await this.jwtService.signAsync(payload, {
        secret: env.SECRET_TOKEN,
        expiresIn: env.EXPIRES_TOKEN,
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        secret: env.SECRET_REFRESH_TOKEN,
        expiresIn: env.EXPIRES_REFRESH_TOKEN,
      }),
    };
  }
}
