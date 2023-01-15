import { IExample } from "../schemas/examplePOSTBodyJsonSchema";

export class ExampleCreateDTO {
  constructor(data: IExample) {
    data.name = data.name.trim();
    Object.assign(this, data);
  }
}
