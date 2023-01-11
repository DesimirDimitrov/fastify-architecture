declare module 'process' {
    declare global {
        namespace NodeJS {
            interface ProcessEnv {
                PORT: string
                FASTIFY_CLOSE_GRACE_DELAY: string
            }
        }
    }
}
