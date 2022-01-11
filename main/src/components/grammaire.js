import React, {useState} from "react";
import textgears from 'textgears-api';
import { textgear } from "../textgear";
import { useEffect } from 'react';
import NLPCloudClient from 'nlpcloud';

const Grammaire = () => {

const client = new NLPCloudClient('en_core_web_lg','f8c35e73b325e61e45f853b41a647905a1a04133')

client.entities("John Doe is a Go Developer at Google")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
}
    // useState error est initialisé à null
        // const [error, setError] = useState(null);
        // const [isLoaded, setIsLoaded] = useState(false);
        // const [items, setItems] = useState([]);
      
        // Remarque : le tableau vide de dépendances [] indique
        // que useEffect ne s’exécutera qu’une fois, un peu comme
        // componentDidMount()
        // useEffect(() => {
        //   fetch("https://api.textgears.com/docs/TextGears.postman.json"
        // //   ,{
        //       method: 'POST',
        //       headers: {
        //           'X-API-KEY': 'yVEtZ7HVBesL9p1N', 
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json'
        //       }
        //   }
    //     )
    //         .then(res => res.json())
    //         .then(
    //           (result) => {
    //             setIsLoaded(true);
    //             setItems(result.items);
    //           },
    //           // Remarque : il faut gérer les erreurs ici plutôt que dans
    //           // un bloc catch() afin que nous n’avalions pas les exceptions
    //           // dues à de véritables bugs dans les composants.
    //           (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //           }
    //         )
    //     }, [])
      
    //     if (error) {
    //       return <div>Erreur : {error.message}</div>;
    //     } else if (!isLoaded) {
    //       return <div>Chargement...</div>;
    //     } else {
    //       return (
    //         <ul>
    //           {items.map(item => (
    //             <li key={item.name}>
    //               {item.name} {item.price}
    //             </li>
    //           ))}
    //         </ul>
    //       );
    //     }
    // //     return (
    // //   <>
    // //     <label for="story">Tell us your story:</label>
    // //     <textarea id="story" name="story" rows="5" cols="33">
    // //     </textarea>
    // //   </>
    // // );
    //   }
    // const NLPCloudClient = require('nlpcloud');

    // const client = new NLPCloudClient('en_core_web_lg','f8c35e73b325e61e45f853b41a647905a1a04133')
    
    // // Returns an Axios promise with the results.
    // // In case of success, results are contained in `response.data`. 
    // // In case of failure, you can retrieve the status code in `err.response.status` 
    // // and the error message in `err.response.data.detail`.
    // client.entities("John Doe has been working for Microsoft in Seattle since 1999.")
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (err) {
    //     console.error(err.response.status);
    //     console.error(err.response.data.detail);
    //   });
    
    

// const textgearsApi = textgears('yVEtZ7HVBesL9p1N', {language: 'en-US'});
// textgearsApi.checkGrammar('I is small')
//     .then((data) => {
//         for (const error of data.errors) {
//             console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '));
//         }
//     })
//     .catch((err) => {});
    // return (
    //   <>
    //     <label for="story">Tell us your story:</label>
    //     <textarea id="story" name="story" rows="5" cols="33">
    //     </textarea>
    //   </>
    // );
// }; 

export default Grammaire


