import React from 'react'
import GrammarChecker from './grammaireAPI'
import axios from 'axios'
import textgears from 'textgears-api'

// export default class Correction extends React.Component {
    // state = {
    //     corrections: [],
    //   };
const Correction = () => {
   const textgearsApi = textgears('yVEtZ7HVBesL9p1N', {language: 'en-US'});
      textgearsApi.checkGrammar({GrammarChecker})
          .then((data) => {
              console.log(data)              
              for (const error of data.errors) {
                //   console.log(error)
                  console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '));
              }
          })
          .catch((err) => {});
    return(
        <h1>test : {Correction}</h1>

    )
}
 export default Correction;