import React from 'react';

const SpreadsheetHeader = ({ columnLabels, columnTypes, onColumnTypeChange }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columnLabels.length + 1}, minmax(64px, 1fr))`,
      }}
    >
      <div className="border border-gray-700"></div>
      {columnLabels.map((label, index) => (
        <div
          key={label}
          className="border border-gray-700 font-bold text-center flex flex-col items-center justify-center"
        >
          {label}
          <select
            value={columnTypes[index]}
            onChange={(e) => onColumnTypeChange(index, e.target.value)}
            className="mt-1"
          >
            <option value="Text">Text</option>
            <option value="Number">Number</option>
            <option value="Date">Date</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default SpreadsheetHeader;
