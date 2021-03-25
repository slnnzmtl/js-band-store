import API from "./";

class AuthAPI extends API {
  constructor() {
    super();

    this.entity = "signin";
  }
  
  async login(data) {

    console.log('login')

    return await super.post(this.entity, {
      "username": data
    });
  }
}

export default new AuthAPI();