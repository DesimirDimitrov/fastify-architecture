export class PaginationBuilder {
  page: number;
  limit: number;
  cursor: number;
  skip: number;

  constructor(page: number, limit: number) {
    this.page = page;
    this.limit = limit;

    this.cursor = this.page * this.limit;
    this.skip = 1;

    if (this.page === 1) {
      this.cursor = 1;
      this.skip = 0;
    } else {
      this.cursor = (this.page - 1) * this.limit;
    }
  }
}
