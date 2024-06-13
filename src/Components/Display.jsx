import React from 'react';

export default function Display({values, handleReset}) {
  const {bill, tip, people} = values;
  const tipAmountTotal = (bill * tip) / 100;
  const billPerPerson = bill / people;
  const tipAmount = tipAmountTotal / people;

  const totalPerPerson = billPerPerson + tipAmount;

  return (
    <div className="display">
      <div className="panels">
        <div className="row">
          <div className="information">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <p className="amount">
            {' '}
            ${isNaN(tipAmount) || !isFinite(tipAmount) ? '0.00' : tipAmount.toFixed(2)}
          </p>
        </div>
        <div className="row">
          <div className="information">
            <p>Total</p>
            <span>/ person</span>
          </div>
          <p className="amount">
            $
            {isNaN(totalPerPerson) || !isFinite(totalPerPerson)
              ? '0.00'
              : totalPerPerson.toFixed(2)}
          </p>
        </div>
      </div>
      <button disabled={!totalPerPerson} className="reset-btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}
