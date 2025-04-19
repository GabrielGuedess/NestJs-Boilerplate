import { z } from 'zod';

import 'dotenv/config';

const nodeEnv = z.enum(['development', 'production', 'test']);

const envSchema = z.object({
  NODE_ENV: nodeEnv.default('development'),

  DATABASE_URL: z.string().url().min(1),

  SECRET_TOKEN: z.string().min(1),
  EXPIRES_TOKEN: z.string().min(1),

  SECRET_REFRESH_TOKEN: z.string().min(1),
  EXPIRES_REFRESH_TOKEN: z.string().min(1),

  STORAGE_BASE_URL: z.string().min(1),

  AWS_S3_BUCKET: z.string().min(1),
  AWS_ACCESS_KEY_ID: z.string().min(1),
  AWS_DEFAULT_REGION: z.string().min(1),
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
  AWS_DEFAULT_FILES_ACL: z.string().default(''),

  CLOUDINARY_CLOUD_NAME: z.string().min(1),
  CLOUDINARY_API_KEY: z.string().min(1),
  CLOUDINARY_API_SECRET: z.string().min(1),

  API_PORT: z.string().default('3000'),
  DB_PORT: z.string().default('5432'),

  NGINX_PORT: z.string().default('80'),
  REDIS_PORT: z.string().default('6379'),
});

export const env = envSchema.parse(process.env);
