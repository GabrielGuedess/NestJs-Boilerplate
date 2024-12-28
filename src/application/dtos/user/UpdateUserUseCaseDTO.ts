import { type FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';

export abstract class UpdateUserUseCaseRequestDTO {
  id: string;
  email?: string;
  password?: string;
  document?: string;
  full_name?: string;
  avatar?: FileUploadDTO;
}
