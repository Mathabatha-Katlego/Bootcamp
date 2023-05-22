//let s = "Hello";
//console.log(
//s.concat(" there!")
//.toUpperCase()
//.replace("THERE", "you")
//.concat(" You're amazing!")
//);

//let x = 7;
//console.log(Number.isNaN(x));

//let uri = "https://www.example.com/submit?name=maaike van putten";
//let encoded_uri = encodeURI(uri);
//console.log("Encoded:", encoded_uri);
//let decoded_uri = decodeURI(encoded_uri);
//console.log("Decoded:", decoded_uri);

//let uri = "https://www.example.com/submit?name=maaike van putten";
//let encoded_uri = encodeURIComponent(uri);
//console.log("Encoded:", encoded_uri);
//let decoded_uri = decodeURIComponent(encoded_uri);
//console.log("Decoded:", decoded_uri);

//let str_float = "7.6";
//let float_float = parseFloat(str_float);
//console.log("Type of", float_float, "is", typeof float_float);

//let str_binary = "0b101";
//let float_binary = parseFloat(str_binary);
//console.log("Type of", float_binary, "is", typeof float_binary);

//let str_nan = "hello!";
//let float_nan = parseFloat(str_nan);
//console.log("Type of", float_nan, "is", typeof float_nan);

//let arr = ["grapefruit", 4, "hello", 5.6, true];
//function printStuff(element, index) {
//console.log("Printing stuff:", element, "on array position:", index);
//}
//arr.forEach(printStuff);

//let arr = ["squirrel", 5, "Tjed", new Date(), true];
//function checkString(element, index) {
//return typeof element === "string";
//}
//let filterArr = arr.filter(checkString);
//console.log(filterArr);

//console.log(arr.every(checkString));

//arr = ["grapefruit", 4, "hello", 5.6, true];
//arr.copyWithin(0, 1, 4);
//console.log(arr);

//const names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

//const uniqueNames = names.filter((name, index) => {
  //return names.indexOf(name) === index;
//});

//console.log(uniqueNames);

//const names = ["John", "Jane", "Mike", "Jane", "Alex", "John", "Mary", "Alex", "Mike"];

//const uniqueNames = names.filter((value, index, array) => {
  //const firstIndex = array.indexOf(value);
  //const isUnique = firstIndex === index;
  //console.log(`Index: ${index}, Value: ${value}, First index: ${firstIndex}, Is unique? ${isUnique}`);
  //return isUnique;
//});

//console.log(uniqueNames);

//const numbers = [1, 2, 3, 4, 5];

// Using anonymous function
//const doubledNumbers = numbers.map(function(num) {
  //return num * 2;
//});

//let s1 = "Hello ";
//let s2 = "JavaScript";
//let result = s1.concat(s2);
//console.log(result);

//let result = "Hello JavaScript";
//let arr_result = result.split(" ");
//console.log(arr_result);

//let letters = ["a", "b", "c"];
//let x = letters.join();
//console.log(x);

//let poem = "Roses are red, and be freid, and violets are blue"
//let index_re = poem.indexOf("re");
//console.log(index_re);

//let str = "Create a substring";
//let substr1 = str.slice(5);
//let substr2 = str.slice(0,3);
//console.log("1:", substr1);
//console.log("2:", substr2);

//let encouragement = "You are doing great, keep up the good work!";
//let bool_start = encouragement.startsWith("You");
//console.log(bool_start);

//const sentence = "thIs will be capiTalized for each word";

//function capitalizeWords(str) {
  //const words = str.toLowerCase().split(" ");
  //const capitalizedWords = [];

  //words.forEach((word) => {
    //const capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    //capitalizedWords.push(capitalizedWord);
  //});

  //return capitalizedWords.join(" ");
//}

//const capitalizedSentence = capitalizeWords(sentence);
//console.log(capitalizedSentence);


//let str = "I love JavaScript";
//str = str.toLowerCase();

//const vowels = ["a", "e", "i", "o", "u"];

//vowels.forEach(letter => console.log(letter));

//vowels.forEach((letter, index) => {
  //str = str.replaceAll(letter, index+1);
//});

//console.log(str);

//let x = 1.23456;
//let newX = x.toFixed(2);
//console.log(newX)

//let y = 1.23456;
//let newY = y.toFixed(3);
//console.log("New Y is",newY)

let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

let result = Math.sqrt(64);
console.log(result);

//let x = 6.78;
//let y = 5.34;
//console.log("X:", x, "becomes", Math.round(x));
//console.log("Y:", y, "becomes", Math.round(y));

//console.log("X:", x, "becomes", Math.ceil(x));
//console.log("Y:", y, "becomes", Math.ceil(y));

let x = 2;
let exp = Math.exp(x);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);

console.log(Math.PI);

console.log(Math.ceil(5.7)); 
console.log(Math.floor(5.7)); 
console.log(Math.round(5.7)); 

console.log(Math.random());

console.log(Math.floor(Math.random() * 11)); 

//function generateRandomNumber(min, max) {
  //  return Math.floor(Math.random() * (max - min + 1)) + min;
  //}
  
  //for (let i = 0; i < 100; i++) {
    //console.log(generateRandomNumber(1, 100));
 // }
 let d = new Date();
 console.log("Day of week:", d.getDay());
 console.log("Day of month:", d.getDate());
 console.log("Month:", d.getMonth());
 console.log("Year:", d.getFullYear());
 console.log("Seconds:", d.getSeconds());
 console.log("Milliseconds:", d.getMilliseconds());
 console.log("Time:", d.getTime());

 d.setFullYear(2023);
console.log(d);

