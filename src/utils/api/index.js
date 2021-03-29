class API {
  constructor() {
    this.path = 'https://js-band-store-api.glitch.me';

    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async post(entity, body, headers) {
    return fetch(`${this.path}/${entity}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        ...this.headers,
        ...headers,
      },
    })
      .then((res) => {
        if (!res.ok) throw Error(res.status);
        return res.json();
      });
  }

  get(entity, headers) {
    return fetch(`${this.path}/${entity}`, {
      method: 'GET',
      headers: {
        ...this.headers,
        ...headers,
      },
    })
      .then((res) => {
        if (!res.ok) throw Error(res.status);
        return res.json();
      });
  }
}

export default API;
