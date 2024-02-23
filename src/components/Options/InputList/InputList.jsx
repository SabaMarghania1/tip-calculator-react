import Styles from "./inputlist.module.css";
import {useState} from "react";
function InputList({label, handleSelectedTip, tipValue, setTipValue}) {
  const values = [5, 10, 15, 25, 50];

  return (
    <div>
      <label className={Styles.label}>{label}</label>
      <div className={Styles.tips__container}>
        {values.map(tip => {
          return (
            <button
              onClick={e => handleSelectedTip(e)}
              className={`${Styles.tip} ${Styles.regular__tip} ${
                tipValue === tip ? Styles.selected : ""
              }`}
              value={tip}
              key={tip}
            >
              {tip}%
            </button>
          );
        })}
        <input
          type="number"
          className={`${Styles.tip} ${Styles.extra__tip}`}
          onInput={e => setTipValue(+e.target.value)}
          value={undefined}
          placeholder="Custom"
        />
      </div>
    </div>
  );
}

export default InputList;
