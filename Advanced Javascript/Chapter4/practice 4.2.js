
let age = prompt("Please enter your age:");

age = Number(age);


let message;


if (age >= 21) {
  message = "You are allowed to enter the venue and purchase alcohol.";
}


else if (age >= 19) {
  message = "You are allowed to enter the venue but not purchase alcohol.";
}

else {
  message = "You are not allowed to enter the venue.";
}


console.log(message);
