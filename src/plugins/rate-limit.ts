import fp from "fastify-plugin";
import fastifyRateLimit, { FastifyRateLimitOptions } from "@fastify/rate-limit";

export default fp<FastifyRateLimitOptions>(async (fastify, opts) => {
  fastify.register(fastifyRateLimit, {
    max: 200,
    timeWindow: "1 minute"
  });
});
