// Step 1: Select the element with the class output
const output = document.querySelector('.output');

// Step 2: Select only the ul tag that is within the output element and update its ID to mainList
const mainList = output.querySelector('ul');
mainList.id = 'mainList';

// Step 3: Search for the tagName of each div, and output them into the console as an array
const divs = output.querySelectorAll('div');
const divTags = [];
divs.forEach(div => {
  divTags.push(div.tagName.toLowerCase());
});
console.log(divTags);

// Step 4: Set the ID of each div tag to id with a numeric value of the order they appear within output, and alternate their colors between red and blue
for (let i = 0; i < divs.length; i++) {
  divs[i].id = 'id' + i;
  if (i % 2 === 0) {
    divs[i].style.color = 'red';
  } else {
    divs[i].style.color = 'blue';
  }
}
