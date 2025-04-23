import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';
import { Injectable } from '@nestjs/common';

import dayjs from 'dayjs';
import { compare } from 'bcryptjs';
import { I18nTranslations } from '@root/i18n/generated';

import { AuthRepository } from 'domain/repositories/AuthRepository';
import { AppError, StatusCode } from 'domain/shared/errors/AppError';
import {
  SignInRequestDTO,
  SignInResponseDTO,
  RefreshTokenRequestDTO,
  RefreshTokenResponseDTO,
} from 'domain/dtos/repositories/AuthRepositoryDTO';

import { env } from 'infrastructure/env';
import { PrismaService } from 'infrastructure/database/prisma/prisma.service';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async refreshToken(
    credentials: RefreshTokenRequestDTO,
  ): Promise<RefreshTokenResponseDTO> {
    const user = await this.prisma.user.findUnique({
      where: { id: credentials.id, email: credentials.email },
    });

    if (!user) {
      throw new AppError({
        statusCode: StatusCode.UNAUTHORIZED,
        message: this.i18n.t('repositories.ERROR_INVALID_TOKEN'),
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
      throw new AppError({
        statusCode: StatusCode.UNAUTHORIZED,
        message: this.i18n.t('repositories.ERROR_NOT_FOUND', {
          args: { name: 'E-mail' },
        }),
      });
    }

    const shouldPasswordMatch = await compare(
      credentials.password,
      user.password,
    );

    if (!shouldPasswordMatch) {
      throw new AppError({
        statusCode: StatusCode.UNAUTHORIZED,
        message: this.i18n.t('repositories.ERROR_PASSWORD_INCORRECT'),
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
