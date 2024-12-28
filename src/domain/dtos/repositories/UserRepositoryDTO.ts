import { WhereDTO } from 'domain/shared/dtos/WhereDTO';
import { type EnumDTO } from 'domain/shared/dtos/EnumDTO';
import { type UserRoleProps } from 'domain/entities/user/User';
import { type BoolFilterDTO } from 'domain/shared/dtos/BoolFilterDTO';
import { type StringFilterDTO } from 'domain/shared/dtos/StringFilterDTO';
import { type DateTimeFilterDTO } from 'domain/shared/dtos/DateTimeFilterDTO';
import { type SortOrderInputDTO } from 'domain/shared/dtos/SortOrderInputDTO';

abstract class WhereUserUniqueDTO extends WhereDTO {
  id?: string;
  email?: string;
  document?: string;
}

abstract class WhereUserDTO extends WhereDTO {
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

abstract class OrderByUserDTO {
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

export abstract class FindUserRequestDTO {
  where?: WhereUserUniqueDTO;
}

export abstract class FindAllUsersRequestDTO {
  last?: number;
  after?: string;
  first?: number;
  before?: string;
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}

export abstract class CountUsersRequestDTO {
  where?: WhereUserDTO;
}

export abstract class UpdateUserRequestDTO {
  id: string;
  email?: string;
  password?: string;
  document?: string;
  full_name?: string;
  avatar_url?: string;
}
