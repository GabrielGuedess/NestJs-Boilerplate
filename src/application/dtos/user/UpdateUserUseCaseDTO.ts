import { type FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';
import { type WhereUserUniqueDTO } from 'domain/dtos/repositories/UserRepositoryDTO';

export abstract class UpdateUserUseCaseRequestDTO {
  where: WhereUserUniqueDTO;
  data: {
    email?: string;
    password?: string;
    document?: string;
    full_name?: string;
    avatar?: FileUploadDTO;
  };
}
