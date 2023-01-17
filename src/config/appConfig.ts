import process from 'node:process'
import * as dotenv from 'dotenv'

dotenv.config()

const { NODE_ENV, VITEST, VITEST_WORKER_ID } = process.env;

export const Config = {
  isProduction: NODE_ENV === 'production',
  isTest: VITEST === 'true' || VITEST_WORKER_ID !== undefined,

  apiPrefix: '/api',
} as const;
