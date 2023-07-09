function greet(fullName) {
    console.log(`Hello, ${fullName[0]} ${fullName[1]}!`);
}

function processName(nameString, callback) {
    var fullNameArray = nameString.split(' ');
    callback(fullNameArray);
}

var fullNameString = 'Katlego Mohlaloga';
processName(fullNameString, greet);
