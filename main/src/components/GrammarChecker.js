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

  render() {
    let userText = this.state.results;
    const key = "ZqavH6FY8qd0Wjj5";
    const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;

    axios.get(
      axios
        .get(url)
        .then((res) => {
          let stocks = Array.from(res.data["Stock Quotes"]).map((stock) => [
            {
              symbol: stock["1. symbol"],
              price: stock["2. price"],
              volume: stock["3. volume"],
              timestamp: stock["4. timestamp"],
            },
          ]);

          this.setState((state, props) => {
            return [...this.state.stocks];
          });
        })
        .catch((error) => console.log(error))
    );

    return (
      <>
        <h1>Correcteur de Grammaire</h1>
        <div id="form">
          <label for="userInput">Ecrivez ce que vous voulez :</label>

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
      </>
    );
  }
}
