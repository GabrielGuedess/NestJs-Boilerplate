import { extname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { type Readable } from 'node:stream';

import { Injectable } from '@nestjs/common';

import { S3 } from '@aws-sdk/client-s3';

import { AppError } from 'domain/shared/errors/AppError';
import { type UploaderProvider } from 'domain/providers/UploaderProvider';
import {
  type DeletedFileRequestDTO,
  type UploadedFileRequestDTO,
  type UploadedFileResponseDTO,
} from 'domain/dtos/providers/UploaderProviderDTO';

import { s3Config } from 'infrastructure/services/aws/config/S3';

@Injectable()
export class AwsUploaderProvider implements UploaderProvider {
  private client: S3;

  private readonly bucketName = s3Config.bucketName;

  constructor() {
    this.client = new S3({
      region: s3Config.defaultRegion,
      credentials: {
        accessKeyId: s3Config.keyId,
        secretAccessKey: s3Config.secretKey,
      },
    });
  }

  private generatePathKey(folder: string, extension: string): string {
    return `users/${folder}/${randomUUID()}${extension}`;
  }

  private async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', error => reject(error))
        .on('data', (data: Uint8Array) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }

  async upload({
    file,
    folder,
  }: UploadedFileRequestDTO): Promise<UploadedFileResponseDTO> {
    try {
      const extension = extname(file.filename);

      const path = this.generatePathKey(folder, extension);

      const buffer = await this.streamToBuffer(file.createReadStream());

      await this.client.putObject({
        Key: path,
        Body: buffer,
        Bucket: this.bucketName,
        ContentType: file.mimetype,
      });

      return { path };
    } catch {
      throw new AppError('Error uploading file to S3', 401);
    }
  }

  async delete({
    path,
    folder,
    isFolder,
  }: DeletedFileRequestDTO): Promise<void> {
    if (isFolder) {
      const objectsList = await this.client.listObjects({
        Bucket: this.bucketName,
        Prefix: `users/${folder}${path}`,
      });

      if (objectsList.Contents.length === 0) return;

      const keysToDelete = objectsList.Contents.map(object => ({
        Key: object.Key,
      }));

      try {
        await this.client.deleteObjects({
          Bucket: this.bucketName,
          Delete: {
            Objects: keysToDelete,
          },
        });
      } catch {
        throw new AppError('Error deleting folder from S3', 401);
      }

      return;
    }

    try {
      await this.client.deleteObject({
        Key: path,
        Bucket: this.bucketName,
      });
    } catch {
      throw new AppError('Error deleting folder from S3', 401);
    }
  }
}
