import { I18nService } from 'nestjs-i18n';
import { Injectable } from '@nestjs/common';

import { type I18nTranslations } from '@root/i18n/generated';
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from 'cloudinary';

import { UploaderProvider } from 'domain/providers/UploaderProvider';
import { AppError, StatusCode } from 'domain/shared/errors/AppError';
import {
  DeletedFileRequestDTO,
  UploadedFileRequestDTO,
  UploadedFileResponseDTO,
} from 'domain/dtos/providers/UploaderProviderDTO';

import { v2Config } from 'infrastructure/services/cloudinary/config/V2';

type CloudinaryResponseProps = UploadApiResponse | UploadApiErrorResponse;

@Injectable()
export class CloudinaryFileUploaderProvider implements UploaderProvider {
  private client = cloudinary;

  constructor(private readonly i18n: I18nService<I18nTranslations>) {
    this.client.config(v2Config);
  }

  async delete({ path, folder }: DeletedFileRequestDTO): Promise<void> {
    const publicId = this.client
      .url(path, { type: 'fetch' })
      .split('/')
      .pop()
      .replace(/\.[^.]*$/, '');

    await this.client.uploader.destroy(
      `nestJs-boilerplate/${folder}/${publicId}`,
      error => {
        if (error) {
          throw new AppError({
            statusCode: StatusCode.INTERNAL_SERVER_ERROR,
            message: this.i18n.t('providers.ERROR_DELETE_UPLOAD_FILE'),
          });
        }
      },
    );
  }

  async upload({
    file,
    folder,
    filename,
  }: UploadedFileRequestDTO): Promise<UploadedFileResponseDTO> {
    try {
      const timestamp = Date.now();

      const upload = await new Promise<CloudinaryResponseProps>(
        (resolve, reject) => {
          const uploadStream = this.client.uploader.upload_stream(
            {
              timestamp,
              overwrite: true,
              folder: `nestJs-boilerplate/${folder}`,
              ...(filename && { public_id: filename }),
            },
            (error, result) => {
              if (error) {
                return reject(
                  new AppError({
                    statusCode: StatusCode.INTERNAL_SERVER_ERROR,
                    message: this.i18n.t('providers.ERROR_UPLOAD_FILE'),
                  }),
                );
              }

              resolve(result);
            },
          );

          file.createReadStream().pipe(uploadStream);
        },
      );

      return {
        path: `/${upload.public_id}.${upload.format}`,
      };
    } catch {
      return null;
    }
  }
}
