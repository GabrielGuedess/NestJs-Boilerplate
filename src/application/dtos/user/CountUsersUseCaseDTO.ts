import { type WhereUserDTO } from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class CountUsersUseCaseRequestDTO {
  where?: WhereUserDTO;
}
