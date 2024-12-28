import { Injectable } from '@nestjs/common';

import { AuthRepository } from 'domain/repositories/AuthRepository';

import {
  type RefreshTokenUseCaseRequestDTO,
  type RefreshTokenUseCaseResponseDTO,
} from 'application/dtos/auth/RefreshTokenUseCaseDTO';

@Injectable()
export class RefreshTokenUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    request: RefreshTokenUseCaseRequestDTO,
  ): Promise<RefreshTokenUseCaseResponseDTO> {
    const data = await this.authRepository.refreshToken({
      id: request.id,
      email: request.email,
    });

    return data;
  }
}
