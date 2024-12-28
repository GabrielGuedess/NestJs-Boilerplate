import {
  type DeletedFileRequestDTO,
  type UploadedFileRequestDTO,
  type UploadedFileResponseDTO,
} from 'domain/dtos/providers/UploaderProviderDTO';

export abstract class UploaderProvider {
  abstract delete(parameters: DeletedFileRequestDTO): Promise<void>;

  abstract upload(
    parameters: UploadedFileRequestDTO,
  ): Promise<UploadedFileResponseDTO>;
}
