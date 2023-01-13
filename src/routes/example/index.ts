// Schemas
import { exampleGETQueryStringJsonSchema } from "../../business/example/schemas/exampleGETQueryStringJsonSchema";
//import { examplePOSTBodyJsonSchema } from "./../../business/example/schemas/examplePOSTBodyJsonSchema";

import { StatusCodes } from "http-status-codes";
import { examplePOSTBodyJsonSchema } from "../../business/example/schemas/examplePOSTBodyJsonSchema";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const root: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
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
      schema: {
        body: examplePOSTBodyJsonSchema,
      },
    },
    async function(request, reply) {
      reply.status(StatusCodes.CREATED).send({ message: request.body.name });
    }
  );
};

export default root;
