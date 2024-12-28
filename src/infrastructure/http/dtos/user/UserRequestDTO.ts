export abstract class UserRequestDTO {
  email: string;
  password: string;
  document: string;
  full_name: string;
  avatar_url?: string;
}
