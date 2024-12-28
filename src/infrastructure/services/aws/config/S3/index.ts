import { env } from 'infrastructure/env';

export const s3Config = {
  keyId: env.AWS_ACCESS_KEY_ID,
  bucketName: env.AWS_S3_BUCKET,
  secretKey: env.AWS_SECRET_ACCESS_KEY,
  defaultRegion: env.AWS_DEFAULT_REGION,
  defaultFilesACL: env.AWS_DEFAULT_FILES_ACL,
};
