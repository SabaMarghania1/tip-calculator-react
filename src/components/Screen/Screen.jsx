import Styles from "./Screen.module.css";

function Screen({tipPerson, totalPerson, handleReset, touched}) {
  const correctTip = tipPerson.toFixed(2);
  const correctPerson = totalPerson.toFixed(2);
  return (
    <div className={Styles.screen__container}>
      <div className={Styles.rows}>
        <div className={Styles.row}>
          <p className={Styles.row__left}>
            Tip Amount
            <span>/ person</span>
          </p>
          <p className={Styles.row__right}>
            ${isNaN(tipPerson) || !isFinite(tipPerson) ? "0.00" : correctTip}
          </p>
        </div>
        <div className={Styles.row}>
          <p className={Styles.row__left}>
            Total
            <span>/ person</span>
          </p>
          <p className={Styles.row__right}>
            ${isNaN(totalPerson) || !isFinite(totalPerson) ? "0.00" : correctPerson}
          </p>
        </div>
      </div>
      <button
        onClick={handleReset}
        className={!touched ? `${Styles.resetBtn} ${Styles.unTouchedBtn}` : Styles.resetBtn}
      >
        Reset
      </button>
    </div>
  );
}

export default Screen;
