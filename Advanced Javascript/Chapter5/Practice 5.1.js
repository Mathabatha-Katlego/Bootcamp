const maxNum = 5;


const solution = Math.floor(Math.random() * maxNum) + 1;
console.log(`Solution: ${solution}`); 


let isCorrect = false;

while (!isCorrect) {

  const guess = Number(prompt(`Guess a number between 1 and ${maxNum}:`));

 
  if (guess === solution) {
    isCorrect = true;
    console.log("Congratulations, you guessed correctly!");
  } else if (guess < solution) {
    console.log("Your guess is too low. Try again.");
  } else {
    console.log("Your guess is too high. Try again.");
  }
}
