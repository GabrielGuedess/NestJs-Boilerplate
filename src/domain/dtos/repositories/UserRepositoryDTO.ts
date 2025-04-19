import { WhereDTO } from 'domain/shared/dtos/WhereDTO';
import { type EnumDTO } from 'domain/shared/dtos/EnumDTO';
import { type UserRoleProps } from 'domain/entities/user/User';
import { type BoolFilterDTO } from 'domain/shared/dtos/BoolFilterDTO';
import { type StringFilterDTO } from 'domain/shared/dtos/StringFilterDTO';
import { type DateTimeFilterDTO } from 'domain/shared/dtos/DateTimeFilterDTO';
import { type SortOrderInputDTO } from 'domain/shared/dtos/SortOrderInputDTO';
import { type RequireAtLeastOne } from 'domain/shared/helpers/RequireAtLeastOne';

export type WhereUserUniqueDTO = RequireAtLeastOne<
  {
    id?: string;
    email?: string;
    document?: string;
  },
  'id' | 'email' | 'document'
>;

export abstract class WhereUserDTO extends WhereDTO {
  id?: StringFilterDTO;
  active?: BoolFilterDTO;
  email?: StringFilterDTO;
  validated?: BoolFilterDTO;
  document?: StringFilterDTO;
  full_name?: StringFilterDTO;
  avatar_url?: StringFilterDTO;
  role?: EnumDTO<UserRoleProps>;
  created_at?: DateTimeFilterDTO;
  updated_at?: DateTimeFilterDTO;
}

export abstract class OrderByUserDTO {
  id?: 'asc' | 'desc';
  role?: 'asc' | 'desc';
  email?: 'asc' | 'desc';
  active?: 'asc' | 'desc';
  document?: 'asc' | 'desc';
  full_name?: 'asc' | 'desc';
  validated?: 'asc' | 'desc';
  created_at?: 'asc' | 'desc';
  updated_at?: 'asc' | 'desc';
  avatar_url?: SortOrderInputDTO;
}

export abstract class PaginationCursorUsersRequestDTO {
  last?: number;
  after?: string;
  first?: number;
  before?: string;
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}

export abstract class PaginationOffsetUsersRequestDTO {
  page?: number;
  limit?: number;
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}

export abstract class FindAllUsersRequestDTO {
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}

export abstract class FindUniqueUserRequestDTO {
  returnError?: boolean;
  where?: WhereUserUniqueDTO;
}

export abstract class FindFirstUserRequestDTO {
  where?: WhereUserDTO;
  returnError?: boolean;
}

export abstract class CountUsersRequestDTO {
  where?: WhereUserDTO;
}

export abstract class ActivateUserRequestDTO {
  where?: WhereUserUniqueDTO;
}

export abstract class DeactivateUserRequestDTO {
  where?: WhereUserUniqueDTO;
}

export abstract class DeleteUserRequestDTO {
  where?: WhereUserUniqueDTO;
}

export abstract class UpdateUserRequestDTO {
  where: WhereUserUniqueDTO;
  data: {
    email?: string;
    password?: string;
    document?: string;
    full_name?: string;
    avatar_url?: string;
  };
}
