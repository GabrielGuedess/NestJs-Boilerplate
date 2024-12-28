import { Injectable } from '@nestjs/common';

import { AuthRepository } from 'domain/repositories/AuthRepository';

import {
  type AuthUserUseCaseRequestDTO,
  type AuthUserUseCaseResponseDTO,
} from 'application/dtos/auth/AuthUserUseCaseDTO';

@Injectable()
export class AuthUserUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    request: AuthUserUseCaseRequestDTO,
  ): Promise<AuthUserUseCaseResponseDTO> {
    const data = await this.authRepository.signIn({
      email: request.email,
      password: request.password,
    });

    return data;
  }
}
