import { type User } from 'domain/entities/user/User';

import { env } from 'infrastructure/env';
import { type UserResponseDTO } from 'infrastructure/http/dtos/user/UserResponseDTO';

export class UserViewModel {
  static toHTTP(user: User): UserResponseDTO {
    return {
      id: user.id,
      role: user.role,
      email: user.email,
      document: user.document,
      full_name: user.fullName,
      validated: user.validated,
      avatar_url: user.avatarUrl && `${env.STORAGE_BASE_URL}/${user.avatarUrl}`,
      active: user.active,
      updated_at: user.updatedAt,
      created_at: user.createdAt,
    };
  }
}
