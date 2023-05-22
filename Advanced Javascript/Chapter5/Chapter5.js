//let i = 0;
//while (i < 10) {
//console.log(i);
//i++;
//}

//let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
//let notFound = true;
//while (notFound && someArray.length > 0) {
//if (someArray[0] === "Louiza") {
//console.log("Found her!");
//notFound = false;
//} else {
//someArray.shift();
//}
//}

//let nr1 = 0;
//let nr2 = 1;
//let temp;
//fibonacciArray = [];
//while (fibonacciArray.length < 25) {
  //  fibonacciArray.push(nr1);
   // temp = nr1 + nr2;
    //nr1 = nr2;
    //nr2 = temp;
//}

// 1. Set max value
const maxNum = 5;

// 2. Generate random number for solution
const solution = Math.floor(Math.random() * maxNum) + 1;
console.log(`Solution: ${solution}`); // For debugging purposes only

// 3. Set default value for correct status
let isCorrect = false;

// 4. Use while loop to ask for user input until correct guess
while (!isCorrect) {
  // Prompt user for guess and convert to number
  const guess = Number(prompt(`Guess a number between 1 and ${maxNum}:`));

  // 5. Check if guess is correct
  if (guess === solution) {
    isCorrect = true;
    console.log("Congratulations, you guessed correctly!");
  } else if (guess < solution) {
    console.log("Your guess is too low. Try again.");
  } else {
    console.log("Your guess is too high. Try again.");
  }
}
