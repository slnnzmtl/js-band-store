class API {
  constructor() {
    this.path = "https://js-band-store-api.glitch.me";

    this.headers = {
      "Content-Type": "application/json",
    }
  }

  async post(entity, body, headers) {

    return await fetch (`${this.path}/${entity}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...this.headers,
        ...headers
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error));
  }
  
  get(entity, headers) {
    try {
      return fetch (`${this.path}/${entity}`, {
        method: "GET",
        headers: {
          ...this.headers,
          ...headers
        }
      })
    }
    catch(error) {
      console.error("Error: ", error);
    }
  }

  delete(entity, id, headers) {
    return fetch (`${this.path}/${entity}/${id}`, {
      method: "DELETE",
      headers: {
        ...this.headers,
        ...headers
      }
    })
  }

  put(entity, id, data, headers) {
    let body = JSON.stringify({
      data: JSON.stringify(data)
    });

    fetch (`${this.path}/${entity}/${id}`, {
      method: "PUT",
      headers: {
        ...this.headers,
        ...headers
      },
      body
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default API;