import { ExampleRepository } from "./../repositories/example.repository";
import { ExampleCreateDTO } from "../dtos/example-create.dto";

export class ExampleService {
  static create(dto: ExampleCreateDTO, repo: ExampleRepository) {
    return repo.create(dto);
  }
}
