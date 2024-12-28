import { type UserRoleProps } from 'domain/entities/user/User';

export abstract class UserResponseDTO {
  id: string;
  email: string;
  active: boolean;
  document: string;
  created_at: Date;
  updated_at: Date;
  full_name: string;
  validated: boolean;
  avatar_url?: string;
  role: UserRoleProps;
}
