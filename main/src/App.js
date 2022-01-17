import logo from "./Logo.png";
import "./App.css";
import "../src/components/main";
// import Main from "../src/components/main";
/* import Grammaire from "./components/grammaire"; */
import GrammarChecker from "./components/GrammarChecker";
// import Correction from "./components/correction";

function App() {
  return (
    <>
      {/* <Main /> */}
      <GrammarChecker />
      {/* <Correction/> */}
    </>
  );
}

export default App;
