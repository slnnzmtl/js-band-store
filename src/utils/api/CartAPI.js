import API from '.';

class CartAPI extends API {
  constructor() {
    super();

    this.entity = 'purchase';
  }

  purchase(token, data) {
    return super.post(
      this.entity,
      { books: data },
      { Authorization: `Bearer ${token}` },
    );
  }
}

export default new CartAPI();
