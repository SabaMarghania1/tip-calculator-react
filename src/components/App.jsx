import {useState} from "react";
import logo from "../images/logo.svg";
import "./App.css";

import Options from "./Options/Options";

function App() {
  return (
    <>
      <div className="main-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="content">
          <Options />
        </div>
      </div>
    </>
  );
}

export default App;
