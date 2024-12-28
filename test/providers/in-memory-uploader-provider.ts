import { type UploaderProvider } from 'domain/providers/UploaderProvider';
import {
  type DeletedFileRequestDTO,
  type UploadedFileRequestDTO,
  type UploadedFileResponseDTO,
} from 'domain/dtos/providers/UploaderProviderDTO';

export class InMemoryUploaderProvider implements UploaderProvider {
  public files: UploadedFileResponseDTO[] = [];

  async delete({ path }: DeletedFileRequestDTO): Promise<void> {
    const fileRemoveIndex = this.files.findIndex(item => item.path === path);

    this.files.splice(fileRemoveIndex, 1);
  }

  async upload({
    file,
    folder,
  }: UploadedFileRequestDTO): Promise<UploadedFileResponseDTO> {
    this.files.push({ path: `${folder}/${file.filename}` });

    return {
      path: `${folder}/${file.filename}`,
    };
  }
}
