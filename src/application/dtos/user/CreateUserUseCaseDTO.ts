import { type FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';

export abstract class CreateUserUseCaseRequestDTO {
  email: string;
  password: string;
  document: string;
  full_name: string;
  avatar?: FileUploadDTO;
}
