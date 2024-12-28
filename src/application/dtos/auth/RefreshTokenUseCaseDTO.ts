export abstract class RefreshTokenUseCaseRequestDTO {
  id: string;
  email: string;
}

export abstract class RefreshTokenUseCaseResponseDTO {
  token: string;
  token_expires: Date;
}
