
const num1 = 10;
const num2 = 10;

let operator = '+';

function calculate(num1, num2, operator = '+') {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else {
        console.log('Invalid operator, defaulting to addition.');
        return num1 + num2;
    }
}

console.log(calculate(num1, num2, operator));

operator = '-';
console.log(calculate(num1, num2, operator));
