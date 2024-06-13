import React from 'react';

export default function TipSettings({values, setValues}) {
  const {tip, bill, people, customTip} = values;

  function handleSelectTip(value) {
    setValues({
      ...values,
      customTip: '',
      tip: +value,
    });
  }

  const handleBillChange = value => {
    setValues({
      ...values,
      bill: +value,
    });
  };

  const handlePeopleChange = value => {
    setValues({
      ...values,
      people: +value,
    });
  };

  const handleCustomTipChange = value => {
    setValues({
      ...values,
      tip: 0,
      customTip: +value,
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
            className="input"
            onChange={e => handleBillChange(e.target.value)}
            value={bill}
            placeholder="0"
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
          <input
            type="number"
            placeholder="Custom"
            value={customTip}
            onChange={e => handleCustomTipChange(e.target.value)}
            className={`tip-button custom ${customTip !== '' ? 'active-border' : ''}`}
          />
        </div>
      </div>

      <div className="input-group">
        <div className="label">
          <label htmlFor="people">Number of People</label>
          {people === 0 && <span className="error-p">Can't be zero</span>}
        </div>

        <div className="input-container">
          <input
            type="number"
            name="people"
            className={`input ${people === 0 ? 'error input-people' : ''}`}
            value={people}
            onChange={e => handlePeopleChange(e.target.value)}
            placeholder="0"
          />
          <img src="/icon-person.svg" alt="person image" />
        </div>
      </div>
    </div>
  );
}
