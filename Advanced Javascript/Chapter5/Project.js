const multiplicationTable = [];
const numValues = 10;

for (let i = 1; i <= numValues; i++) {
  const row = [];
  for (let j = 1; j <= numValues; j++) {
    row.push(i * j);
  }
  multiplicationTable.push(row);
}

console.log(multiplicationTable);
