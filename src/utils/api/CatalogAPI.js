import API from '.';

class CatalogAPI extends API {
  constructor() {
    super();

    this.entity = 'books';
  }

  async getBooks(token) {
    return super.get(this.entity, {
      Authorization: `Bearer ${token}`,
    });
  }

  async getBookById(token, id) {
    return super.get(
      `${this.entity}/${id}`,
      { Authorization: `Bearer ${token}` },
    );
  }
}

export default new CatalogAPI();
