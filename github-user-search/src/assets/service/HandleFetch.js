export default class handleAPI {
  static async handleFetch(user) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            reject(
              new Error(`Failed to fetch data for ${user}, check the username`)
            );
            return ;
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }
}
