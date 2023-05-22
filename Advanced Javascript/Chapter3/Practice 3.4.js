let myCar = {Make: "BMW",
Model: 325,
color: "red",
transmission: "Manual",
registered: true
}


let propertyName = "ForSale";
myCar[propertyName] = true

console.log(myCar["Make"]);
console.log(myCar["Model"]);
console.log(myCar[propertyName]);