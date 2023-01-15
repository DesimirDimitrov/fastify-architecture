import { PaginationBuilder } from "./../../../utils/pagination-builder";
import { prisma } from "../../../modules/database/db";

export class ExampleRepository {
  findAll() {
    return prisma.example.findMany();
  }

  find(page: number, limit: number) {
    const { cursor, skip } = new PaginationBuilder(page, limit);

    const result = prisma.example.findMany({
      take: limit,
      skip: skip,
      cursor: {
        id: cursor,
      },
      orderBy: {
        id: "asc",
      },
    });

    return result;
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
