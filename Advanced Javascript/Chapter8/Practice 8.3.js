// Step 1: Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Step 2: Use the map() method and an anonymous function to multiply each element by 2
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

// Output the result to the console
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Step 3: Use arrow function syntax to simplify the code
const tripledNumbers = numbers.map(number => number * 3);

// Step 4: Output the result to the console
console.log(tripledNumbers); // Output: [3, 6, 9, 12, 15]
