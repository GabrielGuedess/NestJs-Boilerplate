import {
  type WhereUserDTO,
  type OrderByUserDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class PaginationOffsetUsersUseCaseRequestDTO {
  page?: number;
  limit?: number;
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}
