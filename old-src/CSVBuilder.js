export default class CSVBuilder {
  constructor(columnNames, data) {
    this.columnNames = columnNames;
    this.data = data;
    this.outputString = "";
  }

  makeRow(rowObject) {
    let rowString = "";
    this.columnNames.forEach((colName) => {
      if (rowObject[colName]) {
        rowString += rowObject[colName];
        rowString += ",";
      } else {
        rowString += ",";
      }
    });

    // remove the final comma for a row
    rowString = rowString.slice(0, -1);
    rowString += "\n";
    return rowString;
  }

  makeHeader() {
    this.columnNames.forEach((name) => {
      this.outputString += name;
      this.outputString += ",";
    });

    this.outputString = this.outputString.slice(0, -1);
    this.outputString += "\n";
  }

  makeBody() {
    this.data.forEach((datum) => {
      this.outputString += this.makeRow(datum);
    });

    this.outputString = this.outputString.slice(0, -1);
  }

  makeOutputString() {
    this.makeHeader();
    this.makeBody();
    return this.outputString;
  }
}
