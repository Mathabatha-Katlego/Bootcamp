class Employee {
  constructor(firstName, lastName, yearsWorked) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }

  getDetails() {
    return `${this.firstName} ${this.lastName} has worked at the company for ${this.yearsWorked} years.`;
  }
}


const employees = [
  new Employee("Katlego", "Mohlaloga", 5),
  new Employee("Thato", "Blue", 10),
  new Employee("Fanta", "Orange", 2)
];

employees.forEach(employee => {
  console.log(employee.getDetails());
});
