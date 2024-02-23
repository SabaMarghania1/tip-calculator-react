import {useState} from "react";
import logo from "../images/logo.svg";
import "./App.css";

import Options from "./Options/Options";

function App() {
  const [bill, setBill] = useState("");
  const [tipValue, setTipValue] = useState("");
  console.log(tipValue);

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
            bill={bill}
            max="3"
          />
        </div>
      </div>
    </>
  );
}

export default App;
