import { type WhereUserUniqueDTO } from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class FindUniqueUserUseCaseRequestDTO {
  where?: WhereUserUniqueDTO;
}
