// Schemas
import { examplePOSTBodyJsonSchema } from "../../business/example/schemas/examplePOSTBodyJsonSchema";
import { exampleGETQueryStringJsonSchema } from "../../business/example/schemas/exampleGETQueryStringJsonSchema";
import { prisma } from "../../modules/db/db";

import { StatusCodes } from "http-status-codes";
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
      const data = await prisma.example.findMany({
        skip: 3,
        take: 4,
      });
      return { data };
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
      const exampleRecord = await prisma.example.create({
        data: { name: request.body.name },
      });

      reply.status(StatusCodes.CREATED).send(exampleRecord);
    }
  );
};

export default root;
