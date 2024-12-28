export abstract class SignInRequestDTO {
  email: string;
  password: string;
}

export abstract class SignInResponseDTO {
  token: string;
  user_id: string;
  token_expires: Date;
  refresh_token: string;
  refresh_token_expires: Date;
}

export abstract class RefreshTokenRequestDTO {
  id: string;
  email: string;
}

export abstract class RefreshTokenResponseDTO {
  token: string;
  token_expires: Date;
}
