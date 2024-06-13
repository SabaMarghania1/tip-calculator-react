import React from 'react';

export default function Display() {
  return (
    <div className="display">
      <div className="panels">
        <div className="row">
          <div className="information">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <p className="amount">$4.27</p>
        </div>
        <div className="row">
          <div className="information">
            <p>Total</p>
            <span>/ person</span>
          </div>
          <p className="amount">$32.79</p>
        </div>
      </div>
      <button disabled className="reset-btn">
        RESET
      </button>
    </div>
  );
}
