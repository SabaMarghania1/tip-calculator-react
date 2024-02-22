import Styles from "./input.module.css";

function Input({label, icon}) {
  console.log();
  return (
    <div className={Styles.input__container}>
      <label>{label}</label>
      <div className={Styles.input__box}>
        <input type="number" min="0" />
        <img className={Styles.icon} src={icon} alt="" />
      </div>
    </div>
  );
}

export default Input;
