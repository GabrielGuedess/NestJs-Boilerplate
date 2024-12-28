import { type ReadStream } from 'node:fs';

export class FileUploadDTO {
  filename: string;
  mimetype: string;
  encoding: string;
  fieldName: string;
  createReadStream: () => ReadStream;
}
