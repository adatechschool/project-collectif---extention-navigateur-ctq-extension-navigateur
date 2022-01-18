import React, { useEffect } from "react";
import axios from "axios";

export default class GrammarChecker extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
    this.handleClick = this.handleClick.bind(this);
    /*   const [effect, useEffect] = useEffect(); */
  }

  handleClick() {
    let input = document.getElementById("userInput").value;
    this.setState({
      results: input,
    });
  }

  /*  async */
  /*   handleResult() {
    let userText = this.state.results;
    console.log(userText);
    const key = "0T5GmwonZGCtuAUj";
    const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;
    console.log(url);
    useEffect(() => {
      /* await */ /* axios.get(url).then((res) => {
        console.log(res);
        console.log(res.data.response);
        //  this.setState({res.data});
        for (let error in res.data.response.errors) {
          console.log(res.data.response.errors[error]);
          let div = document.getElementById("resultat");
          let p = document.createElement("p");
          div.append(res.data.response.errors[error].bad, p);
        }
      });
    });
  }  */

  render() {
    /*   const handleResult = () => {
      let userText = this.state.results;
      console.log(userText);
      const key = "0T5GmwonZGCtuAUj";
      const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;
      console.log(url);
      useEffect(() => {
        /* await */ /* axios.get(url).then((res) => {
          console.log(res);
          console.log(res.data.response);
          //  this.setState({res.data});
          for (let error in res.data.response.errors) {
            console.log(res.data.response.errors[error]);
            let div = document.getElementById("resultat");
            let p = document.createElement("p");
            div.append(res.data.response.errors[error].bad, p);
          }
        });
      });
    };  */

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
            onClick={() => this.handleClick() /* , this.handleResult() */}
          />
        </div>
        <div id="resultat"></div>
      </>
    );
  }
}
