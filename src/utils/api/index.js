class API {
  constructor() {
      this.path = "https://js-band-store-api.glitch.me";

      this.headers = {
          'Content-Type': 'application/json'
      }
  }

  async post(entity, body) {

    return await fetch (`${this.path}/${entity}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: this.headers
    })
    .then(response => response.json())
    .catch(error => console.log(error));
  }
  
  get(entity) {
      try {
          return fetch (`${this.path}/${entity}`, {
              method: "GET",
              headers: this.headers
          })
      }
      catch(error) {
          console.error("Error: ", error);
      }
  }

  delete(entity, id) {
      return fetch (`${this.path}/${entity}/${id}`, {
          method: "DELETE",
          headers: this.headers
      })
  }

  put(entity, id, data) {
      let body = JSON.stringify({
          data: JSON.stringify(data)
      });

      fetch (`${this.path}/${entity}/${id}`, {
          method: "PUT",
          headers: this.headers,
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