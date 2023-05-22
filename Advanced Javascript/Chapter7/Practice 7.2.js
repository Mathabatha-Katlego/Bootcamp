class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Katlego", "Mohlaloga");
const person2 = new Person("Mathabatha", "Mohlaloga");

console.log(person1.fullname());
console.log(person2.fullname()); 
