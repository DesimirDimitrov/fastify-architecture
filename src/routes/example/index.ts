import { FastifyPluginAsync } from "fastify";

// Schemas
import { exampleGETQueryStringJsonSchema } from "../../business/example/schemas/exampleGETQueryStringJsonSchema";
import { examplePOSTBodyJsonSchema } from "./../../business/example/schemas/examplePOSTBodyJsonSchema";

import { ReasonPhrases, StatusCodes } from "http-status-codes";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {
      schema: { querystring: exampleGETQueryStringJsonSchema },
    },
    async function(request, reply) {
      return { root: request.query };
    }
  );

  fastify.post(
    "/",
    {
      schema: { body: examplePOSTBodyJsonSchema },
    },
    async function(request, reply) {
      reply
        .status(StatusCodes.CREATED)
        .send({ message: ReasonPhrases.CREATED });
    }
  );
};

export default root;
