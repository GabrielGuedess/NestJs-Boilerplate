import { type FileUploadDTO } from 'domain/shared/dtos/FileUploadDTO';

export class UploadedFileRequestDTO {
  folder: string;
  filename?: string;
  file: FileUploadDTO;
}

export class UploadedFileResponseDTO {
  path: string;
}

export class DeletedFileRequestDTO {
  path: string;
  folder?: string;
  isFolder?: boolean;
}
