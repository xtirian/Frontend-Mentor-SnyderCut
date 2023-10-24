export default async function handleFetch(url) {
  /*const fetchedItem = new Promise((resolve, reject) => {
        fetch(url).then((response) =>{
            if(!response.ok) {
                reject(new Error (`Failed to fetch data for ${url}`));
                return ;
            }
            return response.json()
        }).then((data) => {
            resolve(data);
        }).catch((error) =>{
        reject(error);
        });        
    })*/
    const response = await fetch(`https://api.github.com/users/${url}`)
    const data = response.json()

  

  return new Promise(() => {
    return data
  })

  
  
}
