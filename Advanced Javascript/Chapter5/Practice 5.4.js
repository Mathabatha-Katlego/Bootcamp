const myTable = [];
const numRows = 3;
const numColumns = 3;
let counter = 0;

for (let i = 0; i < numRows; i++) {
  const tempTable = [];
  for (let j = 0; j < numColumns; j++) {
    const tempObj = {
      value: counter,
      row: i,
      column: j,
    };
    tempTable.push(tempObj);
    counter++;
  }
  myTable.push(tempTable);
}

console.log(myTable);
