const words = ["Soccer", "Rubgy", "Chess", "Basketball",];

const game = {
  currentWord: "",
  currentWordArr: [],
  gamePuzzleArr: [],
  totalLetters: 0,
  wordsLeft: [...words],
  incorrectGuesses: 0,
  maxIncorrectGuesses: 6,
};

const scoreEl = document.querySelector(".score");
const puzzleEl = document.querySelector(".puzzle");
const lettersEl = document.querySelector(".letters");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", startGame);

function startGame() {
  if (game.wordsLeft.length > 0) {
    buttonEl.style.display = "none";
    game.totalLetters = 0;
    game.incorrectGuesses = 0;
    puzzleEl.innerHTML = "";
    lettersEl.innerHTML = "";

    game.currentWord = game.wordsLeft.shift();
    game.currentWordArr = game.currentWord.split("");

    build();
    updateScore();
  }
}

function build() {
  puzzleEl.innerHTML = "";
  lettersEl.innerHTML = "";
  game.gamePuzzleArr = [];

  game.currentWordArr.forEach((letter, index) => {
    let boxEl = generateElement("div", puzzleEl, "-", "box");
    if (letter === " ") {
      boxEl.style.border = "none";
      boxEl.textContent = "\xa0";
    } else {
      game.totalLetters++;
    }
    game.gamePuzzleArr.push(boxEl);
  });

  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    let boxEl = generateElement("div", lettersEl, letter, "box");
    boxEl.addEventListener("click", () => {
      checker(boxEl);
      checkLetter(letter);
    });
  }
}

function generateElement(type, parent, content, className) {
  let el = document.createElement(type);
  el.classList.add(className);
  parent.appendChild(el);
  el.textContent = content;
  return el;
}

function checker(boxEl) {
  if (
    boxEl.style.backgroundColor === "red" ||
    boxEl.style.backgroundColor === "green"
  ) {
    return;
  }
  boxEl.style.backgroundColor = "red";
  game.incorrectGuesses++;
  checkLoss();
}

function checkLetter(letter) {
  let correct = false;
  for (let i = 0; i < game.currentWordArr.length; i++) {
    if (game.currentWordArr[i].toUpperCase() === letter) {
      game.gamePuzzleArr[i].textContent = letter;
      game.gamePuzzleArr[i].style.backgroundColor = "green";
      game.totalLetters--;
      correct = true;
    }
  }
  if (correct) {
    updateScore();
    checkWin();
  } else {
    game.incorrectGuesses++;
    checkLoss();
  }
}

function updateScore() {
  scoreEl.textContent = `Score: ${game.totalLetters}`;
}

function checkWin() {
  if (game.totalLetters === 0) {
    setTimeout(() => {
      alert("You win!");
      buttonEl.style.display = "inline-block";
    }, 500);
  }
}

function checkLoss() {
  if (game.incorrectGuesses >= game.maxIncorrectGuesses) {
    setTimeout(() => {
      alert("You lose!");
      buttonEl.style.display = "inline-block";
    }, 500);
  }
}
