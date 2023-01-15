import { prisma } from "../../../modules/database/db";

export class ExampleRepository {
  findAll() {
    return prisma.example.findMany();
  }

  find() {
    return prisma.example.findMany();
  }

  findRaw() {
    return prisma.$queryRaw`SELECT id FROM examples`;
  }

  create(data: Record<string, any>) {
    return prisma.example.create({
      data: data,
    });
  }
}
