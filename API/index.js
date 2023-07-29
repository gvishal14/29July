import AppUrl from "./AppUrl";

// export const AllProduct = (data) => {
//     return fetch(AppUrl.ALLPRODUCT, {
//         method: 'GET',
//         body: data,
//         // headers: { "Authorization": `Token ${token}` }
//     }).then(response => response.json())
//         .then(response => response)
//         .catch(e => console.log(e, 'error'));
// };


export const AllProduct = (data) => {
    console.log('URl--->', `${AppUrl.ALLPRODUCT + data}`)
    return fetch(`${AppUrl.ALLPRODUCT + data}`, {
        method: 'GET',
        
    }).then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e, 'error'));
  };