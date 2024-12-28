export abstract class AuthResponseDTO {
  token: string;
  user_id: string;
  token_expires: Date;
  refresh_token: string;
  refresh_token_expires: Date;
}
