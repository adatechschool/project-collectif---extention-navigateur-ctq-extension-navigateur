import React from "react";
import axios from "axios";
import "./GrammarChecker.css";

export default class GrammarChecker extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      correction: [],
    };

  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = () => {
    let userText = this.state.userInput;
    const key = "0T5GmwonZGCtuAUj";
    const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;
    axios.get(url).then((res) => {
      this.setState({ correction: res.data.response.errors });
    });
  };

  render() {
    return (
      <>
        <h1>Correcteur de Grammaire</h1>
        <div className = "conteneur">
        <div id="form">
          <label className= "ecrivez" hmlfor="userInput">Ecrivez ce que vous voulez :</label>

          <textarea
            value={this.userInput}
            id="userInput"
            name="userInput"
            rows="8"
            cols="33"
            onChange={this.handleChange}
          ></textarea>

          <input className="button"
            type="submit"
            value="Corrigez-moi"
            onClick={this.handleSubmit}
          />
        </div>
        <div id="resultat">
          {this.state.correction.map((data, key) => {
            return (
              <ul key={key}>
                <li className="mauvais">Mauvais : {data.bad}</li>
                <li className="mieux">Correction Potentielle : {data.better[0]}</li>
                <li className="description">Description : {data.description.en}</li>
              </ul>
            );
          })}
          </div>
        </div>
      </>
    );
  }
}
