import React, { useState, useCallback } from 'react';
import SpreadsheetControls from './SpreadsheetControls';
import SpreadsheetHeader from './SpreadsheetHeader';
import SpreadsheetRow from './SpreadsheetRow';

const Spreadsheet = () => {
  const [data, setData] = useState(Array(10).fill('').map(() => Array(10).fill('')));
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [formatting, setFormatting] = useState({
    alignment: 'left',
    fontSize: '14px',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState([data]);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  // New state for column types
  const [columnTypes, setColumnTypes] = useState(Array(columns).fill('Text'));

  const addRow = useCallback(() => {
    const newRow = Array(columns).fill('');
    const updatedData = [...data, newRow];
    setData(updatedData);
    setRows((prevRows) => prevRows + 1);
    const newHistory = history.slice(0, historyIndex + 1);
    setHistory([...newHistory, updatedData]);
    setHistoryIndex(newHistory.length);
  }, [data, columns, history, historyIndex]);

  const addColumn = useCallback(() => {
    const newData = data.map((row) => [...row, '']);
    setData(newData);
    setColumns((prevColumns) => prevColumns + 1);
    const newHistory = history.slice(0, historyIndex + 1);
    setHistory([...newHistory, newData]);
    setHistoryIndex(newHistory.length);

    // Add new column type with default 'Text'
    setColumnTypes([...columnTypes, 'Text']);
  }, [data, history, historyIndex, columnTypes]);

  const removeRow = useCallback(() => {
    if (rows > 1) {
      const updatedData = data.slice(0, -1);
      setData(updatedData);
      setRows((prevRows) => prevRows - 1);
      const newHistory = history.slice(0, historyIndex + 1);
      setHistory([...newHistory, updatedData]);
      setHistoryIndex(newHistory.length);
    }
  }, [data, rows, history, historyIndex]);

  const removeColumn = useCallback(() => {
    if (columns > 1) {
      const newData = data.map((row) => row.slice(0, -1));
      setData(newData);
      setColumns((prevColumns) => prevColumns - 1);
      const newHistory = history.slice(0, historyIndex + 1);
      setHistory([...newHistory, newData]);
      setHistoryIndex(newHistory.length);

      // Remove last column type
      setColumnTypes(columnTypes.slice(0, -1));
    }
  }, [data, columns, history, historyIndex, columnTypes]);

  const handleCellChange = (value, rowIndex, colIndex) => {
    const columnType = columnTypes[colIndex];
    if (validateInput(value, columnType)) {
      const newData = data.map((row, rIdx) =>
        row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? value : cell))
      );
      setData(newData);
      const newHistory = history.slice(0, historyIndex + 1);
      setHistory([...newHistory, newData]);
      setHistoryIndex(newHistory.length);
    } else {
      // Handle invalid input (e.g., show a warning)
      alert(`Invalid input for ${columnType}`);
    }
  };

  const validateInput = (value, type) => {
    if (type === 'Number') {
      return !isNaN(value);
    } else if (type === 'Date') {
      return !isNaN(Date.parse(value));
    }
    return true; // Default is text, always true
  };

  const handleColumnTypeChange = (colIndex, newType) => {
    const newTypes = [...columnTypes];
    newTypes[colIndex] = newType;
    setColumnTypes(newTypes);
  };

  const handleFormattingChange = (e) => {
    const { name, value } = e.target;
    setFormatting((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter((row) =>
    row.some((cell) => cell.includes(searchQuery))
  );

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setData(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setData(history[historyIndex + 1]);
    }
  };

  const columnLabels = Array.from({ length: columns }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="p-4 overflow-auto">
      <SpreadsheetControls
        addRow={addRow}
        addColumn={addColumn}
        removeRow={removeRow}
        removeColumn={removeColumn}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        undo={undo}
        redo={redo}
        handleFormattingChange={handleFormattingChange}
        formatting={formatting}
      />
      <SpreadsheetHeader 
        columnLabels={columnLabels} 
        columnTypes={columnTypes}
        onColumnTypeChange={handleColumnTypeChange}
      />
      <div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${columns + 1}, minmax(64px, 1fr))`,
            gridTemplateRows: `repeat(${rows + 1}, minmax(20px, 1fr))`,
          }}
        >
          {filteredData.map((row, rowIndex) => (
            <SpreadsheetRow
              key={`row-${rowIndex}`}
              rowIndex={rowIndex}
              row={row}
              columns={columns}
              handleCellChange={handleCellChange}
              formatting={formatting}
              isLastRow={rowIndex === rows - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spreadsheet;
