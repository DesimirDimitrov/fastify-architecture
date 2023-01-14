import { prisma } from "../../../modules/database/db";

export class ExampleRepository {
  public async findAll() {
    return await prisma.example.findMany();
  }

  public async find(limit: number, ofset: number, orderBy: any, filterBy: any) {
    return await prisma.example.findMany();
  }

  public async create(data: Object) {
    return await prisma.example.create({
      data: data,
    });
  }
}
