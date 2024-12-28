import { WhereDTO } from 'domain/shared/dtos/WhereDTO';

abstract class WhereUserUnique extends WhereDTO {
  id?: string;
  email?: string;
  document?: string;
}

export abstract class FindUniqueUserUseCaseRequestDTO {
  where?: WhereUserUnique;
}
