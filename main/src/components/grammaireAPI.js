import React from "react";
import axios from "axios";
import { onSubmit } from "react";

export default class GrammarChecker extends React.Component {
  state = {
    results: [],
  };
  handleClick() {
    let input = document.getElementById("userInput").value;
    alert(input);
    console.log("hello");
  // axios.get(`https://api.textgears.com/grammar?key=yVEtZ7HVBesL9p1N&text={$input}&language=fr-FR`)
  this.axiosAPI()
  }

// axios.get(`https://api.textgears.com/grammar?text=Des+pomme+rouge&language=fr-FR&whitelist=&dictionary_id=&key=yVEtZ7HVBesL9p1N`)
//     .then((res) => {
//       alert("res data", res.data);
//       const results = res.data;
//       this.setState({results});
      
//     })
 

  axiosAPI() {
    // console.log("url",`https://api.textgears.com/grammar?key=yVEtZ7HVBesL9p1N&text={input}&language=fr-FR` )
    axios
      .get(
        `https://api.textgears.com/grammar?text=Des+pomme+rouge&language=fr-FR&whitelist=&dictionary_id=&key=yVEtZ7HVBesL9p1N`
      )
      .then((res) => {
        alert("res data", res.data);
        const results = res.data;
        this.setState({ results });
        console.log("test", results)
      });
  }

  render() {
    console.log(this.state)
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

          <input type="submit" value="Corrigez-moi" onClick={() => this.handleClick()} />
        </div>

        </>
    );
   }
 }


