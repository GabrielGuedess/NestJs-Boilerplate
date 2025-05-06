import { type User as RawUser } from '@root/prisma/generated/prisma/client';

import { User } from 'domain/entities/user/User';

export class PrismaUserMapper {
  static toPrisma(user: User): RawUser {
    return {
      id: user.id,
      role: user.role,
      email: user.email,
      document: user.document,
      password: user.password,
      full_name: user.fullName,
      validated: user.validated,
      avatar_url: user.avatarUrl,
      active: user.active,
      updated_at: user.updatedAt,
      created_at: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    const user = new User(
      {
        role: raw.role,
        email: raw.email,
        document: raw.document,
        password: raw.password,
        full_name: raw.full_name,
        validated: raw.validated,
        avatar_url: raw.avatar_url,
        active: raw.active,
        updated_at: raw.updated_at,
        created_at: raw.created_at,
      },
      raw.id,
    );

    return user;
  }
}
