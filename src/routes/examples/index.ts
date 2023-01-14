import { ExampleRepository } from "./../../business/example/repositories/example.repository";
// Schemas
import { examplePOSTBodyJsonSchema } from "../../business/example/schemas/examplePOSTBodyJsonSchema";
import { exampleGETQueryStringJsonSchema } from "../../business/example/schemas/exampleGETQueryStringJsonSchema";

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
      try {
        const exampleRepo = new ExampleRepository();
        const data = await exampleRepo.find();

        return { data };
      } catch (error) {
        reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
      }
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
      try {
        const exampleRepo = new ExampleRepository();
        const exampleRecord = await exampleRepo.create({
          name: request.body.name.trim(),
        });

        reply.status(StatusCodes.CREATED).send(exampleRecord);
      } catch (error) {
        reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  );
};

export default root;
