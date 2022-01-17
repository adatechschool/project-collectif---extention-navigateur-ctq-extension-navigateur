import React from "react";
import axios from "axios";
import { onSubmit } from "react";

export default class GrammarChecker extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }







  
  handleClick() {
    let input = document.getElementById("userInput").value;
    this.setState({
      results: input,
    });
   
  }

  /*  async axiosAPI() {
    const res = await axios.get(
      `https://api.textgears.com/grammar?text=${input}&language=fr-FR&whitelist=&dictionary_id=&key=yVEtZ7HVBesL9p1N`
    );
    console.log(res);
    return await res.json();
  } */
  // console.log("url",`https://api.textgears.com/grammar?key=yVEtZ7HVBesL9p1N&text={$userInput}&language=fr-FR` )
  /*    axios
      .get(
        `https://api.textgears.com/grammar?text=${this.handleClick()}&language=fr-FR&whitelist=&dictionary_id=&key=yVEtZ7HVBesL9p1N`
      )
      .then((res) => {
        const results = res.data;
        this.setState({ results });
        console.log("test", results);

        for (const result of results) {
          return (
            <h1>
              'Erreur: %s. Suggestions: %s', result.bad, result.better.join(',
              ')
            </h1>
          );
        }
      }); */
  /* } */

   render(){
    let userText = this.state.results;
    console.log(userText);
    const key = "ZqavH6FY8qd0Wjj5";
    const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;

    axios.get(url).then((res) => {
console.log(res)
     
   //  this.setState({res.data});

           let correction = Array.from(res.errors).map((error => [
            {
              bad: error.bad ,
              good: error.good,
              description: error.description
             
            } 
          ]));

         this.setState({correction})
         console.log(correction);
        })
   
        //.catch((error) => console.log(error))
    
        //render(){

        
    return (
      <>
        <h1>Correcteur de Grammaire</h1>
        <div id="form">
          <label hmlfor="userInput">Ecrivez ce que vous voulez :</label>

          <textarea
            id="userInput"
            name="userInput"
            rows="5"
            cols="33"
          ></textarea>

          <input
            type="submit"
            value="Corrigez-moi"
            onClick={() => this.handleClick()}
          />
        </div>
       {/*  <div>
          {this.state.corrections.map(correction => <p>{correction.bad}<br/>{correction.good}<br/>{correction.description} </p>)}
        </div> */}
      </>
    );
  };
}
