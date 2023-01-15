export class PaginationResponse {
  static send(items: any[], totalItems: number, page: number, limit: number) {
    return {
      data: items,
      meta: {
        totalItems: totalItems,
        currentPage: page,
        limit: limit,
        totalPages: Math.round(totalItems / limit),
      },
    };
  }
}
