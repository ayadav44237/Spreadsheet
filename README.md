# Spreadsheet

This project is a spreadsheet application built with React that mimics the functionality of a basic Excel sheet. It includes features such as adding/removing rows and columns, data validation with dropdowns for column types, formatting options, and undo/redo capabilities.

## Features

- **Dynamic Grid**: The application starts with a default 10x10 grid layout.
- **Add/Remove Rows and Columns**: Users can add or remove rows and columns dynamically.
- **Data Validation**: Each column header includes a dropdown menu to specify the type of data (e.g., Text, Number, Date, Boolean).
- **Formatting**: Users can align text and change the font size of the cell content.
- **Undo/Redo**: The application supports undo and redo functionality for changes made to the spreadsheet.
- **Responsive Design**: The application is responsive and adapts to different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript**: The main programming language used for the project.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/spreadsheet.git
    ```

2. Navigate to the project directory:

    ```bash
    cd spreadsheet
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## File Structure

- **src/components/Spreadsheet.js**: Main component that handles the overall functionality of the spreadsheet.
- **src/components/SpreadsheetCell.js**: Component representing individual cells in the spreadsheet.
- **src/components/SpreadsheetHeader.js**: Component that renders the column headers with dropdowns for data type selection.
- **src/components/SpreadsheetRow.js**: Component that renders a row in the spreadsheet.
- **src/components/SpreadsheetControls.js**: Component containing controls for adding/removing rows and columns, and formatting options.

## Usage

- **Adding Rows/Columns**: Use the buttons in the control panel to add or remove rows and columns.
- **Data Validation**: Select the data type for each column from the dropdown in the column headers.
- **Formatting**: Use the formatting controls to align text and adjust the font size.
- **Undo/Redo**: Use the undo and redo buttons to revert or reapply changes.

## Customization

- **Grid Size**: Modify the initial grid size by adjusting the `rows` and `columns` state in `Spreadsheet.js`.
- **Default Cell Values**: Change the default cell values by modifying the `data` state in `Spreadsheet.js`.

## Known Issues

- **Dropdown Width**: Ensure that the dropdowns are properly aligned and sized. If issues occur, adjust the CSS in `SpreadsheetHeader.js` and `SpreadsheetCell.js`.
- **Performance**: With a large number of rows and columns, the application may experience performance issues.

## Live Demo

Check out the deployed version of the application here: [Spreadsheet Live Demo](https://spreadsheet-liart.vercel.app)

## Contributions

Feel free to fork this repository, make changes, and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or suggestions, please feel free to reach out to [your-email@example.com](mailto:your-email@example.com).
