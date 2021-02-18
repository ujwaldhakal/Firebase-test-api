import { Provider } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CorsOptionsProvider = {
  provide: 'CorsOptions',
  useValue: {
    origin: '*',
    allowedHeaders: ['*', 'Authorization', 'Content-Type'],
    exposedHeaders: ['*', 'Authorization'],
    maxAge: 86400, // 1 day
  } as CorsOptions,
} as Provider;
