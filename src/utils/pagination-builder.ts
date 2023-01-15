/**
 * "meta":{"total":0,"count":0,"per_page":"3","current_page":1,"total_pages":1,"links":{}}
 */
export class PaginationBuilder {
  page: number;
  limit: number;
  cursor: number;
  skip: number;

  totalPages: number;

  constructor(page: number, limit: number) {
    this.totalPages = 0;
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
