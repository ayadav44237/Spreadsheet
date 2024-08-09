import React from 'react';

const SpreadsheetControls = ({
  addRow,
  addColumn,
  removeRow,
  removeColumn,
  searchQuery,
  setSearchQuery,
  undo,
  redo,
  handleFormattingChange,
  formatting
}) => {
  return (
    <div className="flex gap-2  mb-2 overflow-auto">
      <button
        onClick={addRow}
        className="bg-blue-500 text-white text-xs md:text-sm lg:text-base w-[500px] md:w-[300px] lg:w-[200px] p-1 min-w-[200px] md:px-4 md:py-2 rounded hover:bg-blue-700"
      >
        Add Row
      </button>
      <button
        onClick={addColumn}
        className="bg-green-500 text-white text-xs md:text-sm lg:text-base w-[500px] md:w-[300px] lg:w-[200px] p-1 min-w-[200px] md:px-4 md:py-2 rounded hover:bg-green-700"
      >
        Add Column
      </button>
      <button
        onClick={removeRow}
        className="bg-red-500 text-white text-xs md:text-sm lg:text-base w-[500px] md:w-[300px] lg:w-[200px] p-1 min-w-[200px] md:px-4 md:py-2 rounded hover:bg-red-700"
      >
        Remove Row
      </button>
      <button
        onClick={removeColumn}
        className="bg-yellow-500 text-white text-xs md:text-sm lg:text-base w-[500px] md:w-[300px] lg:w-[200px] p-1 min-w-[200px] md:px-4 md:py-2 rounded hover:bg-yellow-700"
      >
        Remove Column
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-400 p-1 rounded"
      />
      <button
        onClick={undo}
        className="bg-gray-500 text-white text-xs md:text-sm lg:text-base w-[500px] md:w-[300px] lg:w-[200px] p-1 min-w-[200px] md:px-4 md:py-2 rounded"
      >
        Undo
      </button>
      <button
        onClick={redo}
        className="bg-gray-700 text-white text-xs md:text-sm lg:text-base w-[500px] md:w-[300px] lg:w-[200px] p-1 min-w-[200px] md:px-4 md:py-2 rounded"
      >
        Redo
      </button>
      <div className="flex mb-4 space-x-2">
        <label className="text-gray-700">Text Alignment:</label>
        <select
          name="alignment"
          value={formatting.alignment}
          onChange={handleFormattingChange}
          className="border border-gray-400 p-1 rounded"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
        <label className="text-gray-700 ml-4">Font Size:</label>
        <select
          name="fontSize"
          value={formatting.fontSize}
          onChange={handleFormattingChange}
          className="border border-gray-400 p-1 rounded"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
        </select>
      </div>
    </div>
  );
};

export default SpreadsheetControls;
