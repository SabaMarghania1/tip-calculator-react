import {useState} from "react";
import logo from "../images/logo.svg";
import "./App.css";

import Options from "./Options/Options";
import Screen from "./Screen/Screen";
function App() {
  const [bill, setBill] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [people, setPeople] = useState("");
  const [touched, setTouched] = useState(false);

  const tipPerson = (bill * tipValue) / 100 / people;
  const totalPerson = bill / people + tipPerson;

  function handleSelectedTip(e) {
    setTipValue(+e.target.value);
  }
  function handleReset() {
    setBill("");
    setTipValue("");
    setPeople("");
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
            touched={touched}
            setTouched={setTouched}
          />
          <Screen tipPerson={tipPerson} totalPerson={totalPerson} handleReset={handleReset} />
        </div>
      </div>
    </>
  );
}

export default App;
