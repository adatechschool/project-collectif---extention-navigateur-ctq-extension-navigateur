import logo from "./Logo.png";
import "./App.css";
import "../src/components/main";
import Main from "../src/components/main";
/* import Grammaire from "./components/grammaire"; */
import GrammarChecker from "./components/grammaireAPI";

function App() {
  return (
    <>
      <Main />
      <GrammarChecker />
    </>
  );
}

export default App;
