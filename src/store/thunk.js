// import React from 'react';
// import { ReduxFetch } from 'react-redux-fetch';


// const fetchConfig = [
//     {
//         resource: 'data',
//         method: 'get',
//         request: {
//         url: '../data.json',
//       },
//     },
//   ];

  const dataList = () => {
     return (disp) => {
         return fetch('/data.json', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, cors, *same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // headers: {
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
            // body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
        .then(response => response.json()).then((payload)=> disp({type:'SET_DATA', payload}));     
     }
    };
   
  export default dataList;