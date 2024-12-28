export abstract class AuthUserUseCaseRequestDTO {
  email: string;
  password: string;
}

export abstract class AuthUserUseCaseResponseDTO {
  token: string;
  user_id: string;
  token_expires: Date;
  refresh_token: string;
  refresh_token_expires: Date;
}
