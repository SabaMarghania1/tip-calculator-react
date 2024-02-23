import React, {useState} from "react";
import Styles from "./input.module.css";

function Input({label, icon, bill, setBill, touched, setTouched}) {
  const handleInput = e => {
    setBill(+e.target.value);
    setTouched(true);
  };

  return (
    <div className={Styles.input__container}>
      <label className="label">{label}</label>
      <div className={Styles.input__box}>
        <input
          style={bill > 0 ? {border: "1px solid green"} : touched ? {border: "1px solid red"} : {}}
          type="number"
          min="0"
          value={bill > 0 ? bill : ""}
          onInput={handleInput}
          onBlur={() => setTouched(true)}
          placeholder="0"
        />
        <img className={Styles.icon} src={icon} alt="" />
        {touched && !bill && <span className={Styles.error}>Can't be zero</span>}
      </div>
    </div>
  );
}

export default Input;
