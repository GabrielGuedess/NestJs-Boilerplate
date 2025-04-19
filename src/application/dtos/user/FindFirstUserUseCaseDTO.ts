import { type WhereUserDTO } from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class FindFirstUserUseCaseRequestDTO {
  where?: WhereUserDTO;
  returnError?: boolean;
}
