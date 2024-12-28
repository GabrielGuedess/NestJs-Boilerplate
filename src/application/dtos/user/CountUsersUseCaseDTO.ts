import { type WhereUserDTO } from 'application/dtos/user/FindAllUsersUseCaseDTO';

export abstract class CountUsersUseCaseRequestDTO {
  where?: WhereUserDTO;
}
