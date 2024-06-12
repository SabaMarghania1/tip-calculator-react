import React from 'react';

export default function TipSettings() {
  return (
    <div className="tip-settings">
      <div className="input-group">
        <label htmlFor="bill">Bill</label>
        <div className="input-container">
          <input type="number" name="bill" min="0" className="input" />
          <img src="/icon-dollar.svg" alt="usd image" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="tip" className="extra-label">
          Select Tip %
        </label>
        <div className="tip-buttons">
          {[5, 10, 15, 25, 50].map(tip => (
            <button className="tip-button normal " key={tip} value={tip}>
              {tip}%
            </button>
          ))}
          <input type="number" min="0" placeholder="Custom" className="tip-button custom" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="people">Number of People</label>
        <div className="input-container">
          <input type="number" name="people" min="0" className="input" />
          <img src="/icon-person.svg" alt="person image" />
        </div>
      </div>
    </div>
  );
}
