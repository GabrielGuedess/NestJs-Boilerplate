import { WhereDTO } from 'domain/shared/dtos/WhereDTO';
import { type EnumDTO } from 'domain/shared/dtos/EnumDTO';
import { type UserRoleProps } from 'domain/entities/user/User';
import { type BoolFilterDTO } from 'domain/shared/dtos/BoolFilterDTO';
import { type StringFilterDTO } from 'domain/shared/dtos/StringFilterDTO';
import { type DateTimeFilterDTO } from 'domain/shared/dtos/DateTimeFilterDTO';
import { type SortOrderInputDTO } from 'domain/shared/dtos/SortOrderInputDTO';

export abstract class WhereUserDTO extends WhereDTO {
  id?: StringFilterDTO;
  active?: BoolFilterDTO;
  email?: StringFilterDTO;
  validated?: BoolFilterDTO;
  password?: StringFilterDTO;
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
  password?: 'asc' | 'desc';
  document?: 'asc' | 'desc';
  full_name?: 'asc' | 'desc';
  validated?: 'asc' | 'desc';
  created_at?: 'asc' | 'desc';
  updated_at?: 'asc' | 'desc';
  avatar_url?: SortOrderInputDTO;
}

export abstract class FindAllUsersUseCaseRequestDTO {
  last?: number;
  after?: string;
  first?: number;
  before?: string;
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}
