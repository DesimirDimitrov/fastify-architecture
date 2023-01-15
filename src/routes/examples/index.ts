import { PaginationResponse } from "./../../modules/response/paginationResponse";
import { ExampleService } from "./../../business/example/services/example.service";
import { ExampleCreateDTO } from "../../business/example/dtos/example-create.dto";
import { ExampleRepository } from "../../business/example/repositories/example.repository";
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
      const { page, limit } = request.query;
      const exampleRepo = new ExampleRepository();
      const [items, totalItems] = await exampleRepo.find(page, limit);

      return PaginationResponse.send(items, totalItems, page, limit);
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
      const exampleCreateDTO = new ExampleCreateDTO(request.body);
      const exampleRecord = await ExampleService.create(
        exampleCreateDTO,
        new ExampleRepository()
      );

      reply.status(StatusCodes.CREATED).send(exampleRecord);
    }
  );
};

export default root;
