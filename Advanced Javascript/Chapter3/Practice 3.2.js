let shoppingList = ["Milk","Bread","Apples"];
console.log("Length of shoppingList is", shoppingList.length);

shoppingList[1]="Bananas"
console.log(shoppingList);

shoppingList.push("Eggs");
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.sort();
console.log(shoppingList);

let indexOfMilk = shoppingList.indexOf("Milk");
console.log(indexOfMilk);

shoppingList.splice(shoppingList.indexOf("Bananas") + 1, 0, "Carrots", "Lettuce");
console.log(shoppingList); 

let drinks = ["Juice", "Pop"];
console.log(drinks); 

let combinedlist = shoppingList.concat(drinks,drinks);
console.log(combinedlist);

let indexofpop = combinedlist.lastIndexOf("Pop");
console.log(indexofpop);