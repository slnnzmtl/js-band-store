import API from "./";

class CatalogAPI extends API {
  constructor() {
    super();

    this.entity = "books";
  }
  
  async getBooks(token) {

    return await super.get(this.entity, {
      "Authorization": `Bearer ${token}`
    })
    .then(res => res.json());
  }
}

export default new CatalogAPI();