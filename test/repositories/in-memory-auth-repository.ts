import dayjs from 'dayjs';

import { type InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { type User } from 'domain/entities/user/User';
import { type AuthRepository } from 'domain/repositories/AuthRepository';
import {
  type SignInRequestDTO,
  type SignInResponseDTO,
  type RefreshTokenRequestDTO,
  type RefreshTokenResponseDTO,
} from 'domain/dtos/repositories/AuthRepositoryDTO';

export class InMemoryAuthRepository implements AuthRepository {
  constructor(private inMemoryUserRepository: InMemoryUserRepository) {}

  async refreshToken(
    credentials: RefreshTokenRequestDTO,
  ): Promise<RefreshTokenResponseDTO> {
    return {
      token: credentials.id,
      token_expires: dayjs().add(15, 'minutes').toDate(),
    };
  }

  async signIn(credentials: SignInRequestDTO): Promise<SignInResponseDTO> {
    let user: User;

    try {
      user = await this.inMemoryUserRepository.findUnique({
        where: { email: credentials.email },
      });
    } catch {
      throw new Error('E-mail not found!');
    }

    if (credentials.password !== user.password) {
      throw new Error('Password incorrect!');
    }

    return {
      token: user.id,
      user_id: user.id,
      refresh_token: user.id,
      token_expires: dayjs().add(15, 'minutes').toDate(),
      refresh_token_expires: dayjs().add(1, 'month').toDate(),
    };
  }
}
