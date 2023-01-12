import S from "fluent-json-schema";

export const exampleGETQueryStringJsonSchema = S.object().prop(
  "name",
  S.string()
);
