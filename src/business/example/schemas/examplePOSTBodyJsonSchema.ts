import { Static, Type } from "@sinclair/typebox";

export const examplePOSTBodyJsonSchema = Type.Object({
  name: Type.String(),
  moreDetails: Type.Optional(Type.String()),
});

export type IExample = Static<typeof examplePOSTBodyJsonSchema>;
