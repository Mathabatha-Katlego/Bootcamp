function scrambleWord(word) {
    let length = word.length;
    let scrambledWord = '';
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * length);
      let letter = word.charAt(randomIndex);
      scrambledWord += letter;
      word = word.substring(0, randomIndex) + word.substring(randomIndex + 1);
      length--;
    }
  
    console.log('Original word: ' + word);
    console.log('Scrambled word: ' + scrambledWord);
    return scrambledWord;
  }
  
  // Example usage
  let word = 'Katlego';
  let scrambledWord = scrambleWord(word);
  console.log(scrambledWord);
  