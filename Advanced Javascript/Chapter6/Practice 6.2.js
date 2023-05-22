
const adjectives = ['amazing', 'brilliant', 'charming', 'dazzling', 'elegant'];

function describeName() {
  const name = prompt('Please enter a name:');
  
  
  const randomIndex = Math.floor(Math.random() * adjectives.length);
  const randomAdjective = adjectives[randomIndex];
  
  console.log(`The name ${name} is ${randomAdjective}!`);
}

describeName();
