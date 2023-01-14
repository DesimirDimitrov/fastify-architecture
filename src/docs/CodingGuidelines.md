# Coding Standards

- status codes, phrases - import { ReasonPhrases, StatusCodes } from "http-status-codes";
reply
        .status(StatusCodes.CREATED)
        .send({ message: ReasonPhrases.CREATED });
- import { examplePOSTBodyJsonSchema } from "./../../business/example/schemas/examplePOSTBodyJsonSchema";
