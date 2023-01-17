import type {FastifyInstance} from 'fastify'
import type { PrismaClient } from '@prisma/client'

declare module 'vitest' {
	export interface TestContext {
		fastify: FastifyInstance
	}
}
