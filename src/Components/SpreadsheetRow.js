import React from 'react';
import SpreadsheetCell from './SpreadsheetCell';

const SpreadsheetRow = ({ row, rowIndex, columns, handleCellChange, formatting, isLastRow }) => {
  return (
    <>
      <div
        className={`border border-gray-700 font-bold text-center flex items-center justify-center ${
          isLastRow ? 'border-b-2 border-gray-700' : ''
        }`}
      >
        {rowIndex + 1}
      </div>
      {row.map((cell, colIndex) => (
        <SpreadsheetCell
          key={`${rowIndex}-${colIndex}`}
          value={cell}
          onChange={(value) => handleCellChange(value, rowIndex, colIndex)}
          formatting={formatting}
        />
      ))}
    </>
  );
};

export default SpreadsheetRow;
