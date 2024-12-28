import { HttpStatus, Injectable } from '@nestjs/common';

import { GraphQLError } from 'graphql';
import {
  v2 as cloudinary,
  type UploadApiResponse,
  type UploadApiErrorResponse,
} from 'cloudinary';

import { UploaderProvider } from 'domain/providers/UploaderProvider';
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

  constructor() {
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
          throw new GraphQLError('Image not deleted', {
            extensions: { code: HttpStatus.INTERNAL_SERVER_ERROR },
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
                  new GraphQLError('Image not uploaded!', {
                    extensions: { code: HttpStatus.INTERNAL_SERVER_ERROR },
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
