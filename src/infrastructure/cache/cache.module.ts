import { Module } from '@nestjs/common';

import { Cacheable } from 'cacheable';
import { createKeyv } from '@keyv/redis';

@Module({
  exports: ['CACHE_INSTANCE'],
  providers: [
    {
      provide: 'CACHE_INSTANCE',
      useFactory: () => {
        const secondary = createKeyv('redis://user:pass@localhost:6379');

        return new Cacheable({ secondary, ttl: '1h' });
      },
    },
  ],
})
export class CacheModule {}
