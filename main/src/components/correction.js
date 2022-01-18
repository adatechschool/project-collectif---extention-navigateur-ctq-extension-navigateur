import React, { useEffect } from "react";
import axios from "axios";
import GrammarChecker from "./GrammarChecker";

const Correction = () => {
  let userText = GrammarChecker.handleClick();
  console.log(userText);
  const key = "0T5GmwonZGCtuAUj";
  const url = `https://api.textgears.com/grammar?text=${userText}&language=fr-FR&whitelist=&dictionary_id=&key=${key}`;
  console.log(url);
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      console.log(res.data.response);

      for (let error in res.data.response.errors) {
        console.log(res.data.response.errors[error]);
        let div = document.getElementById("resultat");
        let p = document.createElement("p");
        div.append(res.data.response.errors[error].bad, p);
      }
    });
  });

  return <div>{Correction}</div>;
};
export default Correction;
