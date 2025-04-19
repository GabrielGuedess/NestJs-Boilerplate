import {
  type WhereUserDTO,
  type OrderByUserDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class PaginationCursorUsersUseCaseRequestDTO {
  last?: number;
  after?: string;
  first?: number;
  before?: string;
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}
