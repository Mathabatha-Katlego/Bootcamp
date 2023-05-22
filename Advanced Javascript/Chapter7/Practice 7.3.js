class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.species} says ${this.sound}!`);
    }
}


const dog = new Animal("dog", "woof");
const cat = new Animal("cat", "meow");
const snake = new Animal("snake", "hiss");

dog.makeSound();
cat.makeSound();
snake.makeSound();

Animal.prototype.eat = function () {
    console.log(`The ${this.species} is eating.`);
}

dog.eat();
cat.eat();
snake.eat();

console.log(dog);
console.log(cat);
console.log(snake);




