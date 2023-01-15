import fp from "fastify-plugin";
import {
  default as fastifyHelmet,
  FastifyHelmetOptions
} from "@fastify/helmet";

export default fp<FastifyHelmetOptions>(async (fastify, opts) => {
  fastify.register(fastifyHelmet, {
    global: true
  });
});
