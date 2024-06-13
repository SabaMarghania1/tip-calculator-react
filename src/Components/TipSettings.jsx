import React, {useState} from 'react';

export default function TipSettings({values, setValues}) {
  const {tip, bill, people} = values;

  function handleSelectTip(value) {
    setValues({
      ...values,
      tip: value,
    });
  }

  const handleBillChange = value => {
    setValues({
      ...values,
      bill: value,
    });
  };

  const handlePeopleChange = value => {
    setValues({
      ...values,
      people: value,
    });
  };

  return (
    <div className="tip-settings">
      <div className="input-group">
        <label htmlFor="bill">Bill</label>
        <div className="input-container">
          <input
            type="number"
            name="bill"
            min="0"
            className="input"
            onChange={e => handleBillChange(e.target.value)}
            value={bill}
          />
          <img src="/icon-dollar.svg" alt="usd image" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="tip" className="extra-label">
          Select Tip %
        </label>
        <div className="tip-buttons">
          {[5, 10, 15, 25, 50].map(tipValue => {
            return (
              <button
                onClick={() => {
                  handleSelectTip(tipValue);
                }}
                className={`tip-button normal ${tip === tipValue ? 'active' : ''}`}
                key={tipValue}
                value={tipValue}
              >
                {tipValue}%
              </button>
            );
          })}
          <input type="number" min="0" placeholder="Custom" className="tip-button custom" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="people">Number of People</label>
        <div className="input-container">
          <input
            type="number"
            name="people"
            min="0"
            className="input"
            value={people}
            onChange={e => handlePeopleChange(e.target.value)}
          />
          <img src="/icon-person.svg" alt="person image" />
        </div>
      </div>
    </div>
  );
}
