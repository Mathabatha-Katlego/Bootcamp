
const rpsArray = ["Rock", "Paper", "Scissors"];


const playerSelectionIndex = Math.floor(Math.random() * 3);
const computerSelectionIndex = Math.floor(Math.random() * 3);


const playerSelection = rpsArray[playerSelectionIndex];
const computerSelection = rpsArray[computerSelectionIndex];
let resultMessage = `You chose ${playerSelection}. The computer chose ${computerSelection}. `;


if (playerSelectionIndex === computerSelectionIndex) {
  resultMessage += "It's a tie!";
}


else {
 
  if ((playerSelectionIndex === 0 && computerSelectionIndex === 2) || playerSelectionIndex > computerSelectionIndex) {
    resultMessage += "You win!";
  }

  else {
    resultMessage += "The computer wins.";
  }
}


console.log(resultMessage);
