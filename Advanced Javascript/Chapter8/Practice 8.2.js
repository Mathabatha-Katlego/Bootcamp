
const names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];


const uniqueNames = names.filter(function(value, index, array) {
 
  return array.indexOf(value) === index;
});


console.log(uniqueNames);
