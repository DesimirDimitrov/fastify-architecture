import { PaginationBuilder } from "./../../../utils/pagination-builder";
import { prisma } from "../../../modules/database/db";

export class ExampleRepository {
  findAll() {
    return prisma.example.findMany();
  }

  async find(page: number, limit: number): Promise<[any[], number]> {
    const { cursor, skip } = new PaginationBuilder(page, limit);

    const [result, totalItems] = await prisma.$transaction([
      prisma.example.findMany({
        take: limit,
        skip: skip,
        cursor: {
          id: cursor
        },
        orderBy: {
          id: "asc"
        }
      }),
      prisma.example.count()
    ]);

    return [result, totalItems];
  }

  findRaw() {
    return prisma.$queryRaw`SELECT id FROM examples`;
  }

  create(data: Record<string, any>) {
    return prisma.example.create({
      data: data
    });
  }
}
