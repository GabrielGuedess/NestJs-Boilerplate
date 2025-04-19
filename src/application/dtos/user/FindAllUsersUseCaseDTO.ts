import {
  type WhereUserDTO,
  type OrderByUserDTO,
} from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class FindAllUsersUseCaseRequestDTO {
  where?: WhereUserDTO;
  order?: OrderByUserDTO;
}
