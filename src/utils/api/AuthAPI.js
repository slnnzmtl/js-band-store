import API from '.';

class AuthAPI extends API {
  constructor() {
    super();

    this.entity = 'signin';
  }

  async login(data) {
    return super.post(this.entity, {
      username: data,
    });
  }
}

export default new AuthAPI();
