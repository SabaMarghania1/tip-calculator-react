import {useState} from "react";
import logo from "../images/logo.svg";
import "./App.css";

import Options from "./Options/Options";
import Screen from "./Screen/Screen";
function App() {
  const [bill, setBill] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [people, setPeople] = useState("");

  const tipPerson = (bill * tipValue) / 100 / people;
  console.log(tipPerson.toFixed(2));

  function handleSelectedTip(e) {
    setTipValue(+e.target.value);
  }

  return (
    <>
      <div className="main-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="content">
          <Options
            handleSelectedTip={handleSelectedTip}
            tipValue={tipValue}
            setTipValue={setTipValue}
            setBill={setBill}
            bill={bill}
            people={people}
            setPeople={setPeople}
          />
        </div>
      </div>
    </>
  );
}

export default App;
