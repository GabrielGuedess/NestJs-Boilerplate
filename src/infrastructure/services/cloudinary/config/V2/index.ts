import { type ConfigOptions } from 'cloudinary';

import { env } from 'infrastructure/env';

export const v2Config: ConfigOptions = {
  secure: true,
  api_key: String(env.CLOUDINARY_API_KEY),
  cloud_name: String(env.CLOUDINARY_CLOUD_NAME),
  api_secret: String(env.CLOUDINARY_API_SECRET),
};
