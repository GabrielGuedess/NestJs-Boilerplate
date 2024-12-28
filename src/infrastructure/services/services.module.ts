import { Module } from '@nestjs/common';

import { UploaderProvider } from 'domain/providers/UploaderProvider';

import { CloudinaryFileUploaderProvider } from 'infrastructure/services/cloudinary/providers/CloudinaryFileUploaderProvider';

@Module({
  exports: [UploaderProvider],
  providers: [
    {
      provide: UploaderProvider,
      useClass: CloudinaryFileUploaderProvider,
    },
  ],
})
export class ServicesModule {}
