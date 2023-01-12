import S from "fluent-json-schema";

export const examplePOSTBodyJsonSchema = S.object().prop("name", S.string());
