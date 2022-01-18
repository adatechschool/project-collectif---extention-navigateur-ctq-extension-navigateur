import React, { useEffect } from "react";
import axios from "axios";
/* import Correction from "./correction"; */

export default class GrammarChecker extends React.Component {
  constructor() {
    super();
    this.state = {
      results: "",
      correction: [],
    };
    /* this.handleClick = this.handleClick.bind(this); */
    /*   const [effect, useEffect] = useEffect(); */
  }

  handleChange = (e) => {
    this.setState({ results: e.target.value });
  };

  handleSubmit = () => {
    let userText = this.state.results;
    const key = "0T5GmwonZGCtuAUj";
    const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;
    axios.get(url).then((res) => {
      console.log(res.data.response);
      this.setState({ correction: res.data.response.errors });
    });
  };

  render() {
    return (
      <>
        <h1>Correcteur de Grammaire</h1>
        <div id="form">
          <label hmlfor="userInput">Ecrivez ce que vous voulez :</label>

          <textarea
            value={this.results}
            id="userInput"
            name="userInput"
            rows="5"
            cols="33"
            onChange={this.handleChange}
          ></textarea>

          <input
            type="submit"
            value="Corrigez-moi"
            onClick={this.handleSubmit}
          />
        </div>
        <div id="resultat">
          {this.state.correction.map((data, key) => {
            return (
              <ul key={key}>
                <li>Mauvais : {data.bad}</li>
                <li>Correction Potentielle : {data.better[0]}</li>
                <li>Description : {data.description.en}</li>
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}
