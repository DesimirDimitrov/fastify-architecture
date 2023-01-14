import { prisma } from "../../../modules/database/db";

export class ExampleRepository {
  public async findAll() {
    return await prisma.example.findMany();
  }

  public async find() {
    return await prisma.example.findMany();
  }

  public async findRaw() {
    return await prisma.$queryRaw`SELECT id FROM examples`;
  }

  public async create(data: Object) {
    return await prisma.example.create({
      data: data,
    });
  }
}
