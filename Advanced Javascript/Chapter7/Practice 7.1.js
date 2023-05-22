class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const friend1 = new Person("Katlego", "Mohlaloga");
  const friend2 = new Person("Mathabatha", "Mohlaloga");

  console.log(`Hello, ${friend1.firstName} ${friend1.lastName} and ${friend2.firstName} ${friend2.lastName}!`);

