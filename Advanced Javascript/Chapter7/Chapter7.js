class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    greet() {
    console.log("Hi there!");
    }
    }

    Person.prototype.introduce = function () {
        console.log("Hi, I'm", this.firstname);
        };

        Person.prototype.favoriteColor = "green";

        let p = new Person("Maria", "Saga");
        console.log(p.favoriteColor);
        p.introduce();

        class Animal {
            constructor(species, sound) {
              this.species = species;
              this.sound = sound;
            }
          
            speak() {
              console.log(`${this.species} says ${this.sound}.`);
            }
          
            eat(food) {
              console.log(`${this.species} is eating ${food}.`);
            }
          }
          
          const lion = new Animal("lion", "roar");
          const elephant = new Animal("elephant", "trumpet");
          
          lion.speak(); // "lion says roar."
          elephant.speak(); // "elephant says trumpet."
          
          Animal.prototype.sleep = function() {
            console.log(`${this.species} is sleeping.`);
          }
          
          lion.sleep(); // "lion is sleeping."
          
          console.log(lion); // Animal { species: 'lion', sound: 'roar' }
          