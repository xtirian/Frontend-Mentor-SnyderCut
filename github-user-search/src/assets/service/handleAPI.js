export default class handleAPI {
  static async handleFetch(user) {
    return new Promise((resolve, reject) => {
      //depois preciso corrigir o fetch, coloquei op place holder para testar o comportamento
      fetch(
        `https://api.github.com/users/${user}`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (!response.ok) {
            reject(
              new Error(`Failed to fetch data for ${user}, check the username`)
            );
            return;
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  static async ConsultAPI(user) {
    return fetch(
      `https://api.github.com/users/${user}`,
      {
        method: "GET",
      }
    ).then((response) => {
      if (response.ok) {
        return true;
      } else if (!response.ok || user == "") {
        return false;
      }
    });
    ////depois preciso corrigir o fetch, coloquei op place holder para testar o comportamento
  }
}
