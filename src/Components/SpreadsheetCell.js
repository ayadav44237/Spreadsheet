import React from 'react';

const SpreadsheetCell = ({ value, onChange, formatting }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        textAlign: formatting.alignment,
        fontSize: formatting.fontSize,
      }}
      className="border border-gray-700 p-1"
    />
  );
};

export default SpreadsheetCell;
