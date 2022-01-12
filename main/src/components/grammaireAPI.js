import React from "react";
import axios from "axios";

export default class GrammarChecker extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    axios.get(`https://api.textgears.com/grammar?key=yVEtZ7HVBesL9p1N&text={}&language=fr-FR`).then((res) => {
      const results = res.data;
      this.setState({ results });
    });
  }

  render() {
    return (
        <>

        <label for="text">Écrivez ce que vous voulez :</label>
         <textarea id="text" name="text" rows="5" cols="33">
        </textarea>

        <button onClick={}>Submit</button>

        <div className="grammar-check">
            {this.state.results.map((result)=> (<p>Faute potentielle : {result.error.bad}</p>))};
            {this.state.results.map((result)=> (<p>Meilleure option : {result.error.better}</p>))};
            {this.state.results.map((result)=> (<p>Explication : {result.error.description}</p>))};
        </div>
      </>
    );
  }
}


/* https://api.textgears.com/grammar?key=DEMO_KEY&text=I+is+an+engeneer!&language=en-GB
https://api.textgears.com/grammar
 */

/* résultat
{
    status : true,  // false in case of checking error
    response : {
        result : true,
        errors : [  // array of errors info
            0 : {
                id : "e2138204610",  // unique error id
                offset : 0,  // error text offset
                length : 9,
                description : {  // API error description & some useful info
                    en : "‘Des’ et le nom ‘pomme’ ne semblent pas bien accordés."
                },
                bad : "Des pomme",  // error text
                better : [  // array of suggestions
                    0 : "De la pomme",
                    1 : "Des pommes"
                ],
                type : "uncategorized"
            }
        ]
    }
} */