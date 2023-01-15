import { Static, Type } from "@sinclair/typebox";

export const exampleGETQueryStringJsonSchema = Type.Object({
  page: Type.Number({ default: 1 }),
  limit: Type.Number({ default: 5 }),
});

export type IExample = Static<typeof exampleGETQueryStringJsonSchema>;
