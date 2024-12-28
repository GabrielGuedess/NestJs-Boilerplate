import {
  type SignInRequestDTO,
  type SignInResponseDTO,
  type RefreshTokenRequestDTO,
  type RefreshTokenResponseDTO,
} from 'domain/dtos/repositories/AuthRepositoryDTO';

export abstract class AuthRepository {
  abstract signIn(credentials: SignInRequestDTO): Promise<SignInResponseDTO>;
  abstract refreshToken(
    credentials: RefreshTokenRequestDTO,
  ): Promise<RefreshTokenResponseDTO>;
}
