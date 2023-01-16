import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function(request, reply) {
    return { message: "success" };
  });
};

export default root;
