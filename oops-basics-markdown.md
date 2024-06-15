# Four Pillars of Object-Oriented Programming

## Encapsulation

Encapsulation can be defined as "the packing of data and functions into one component." Packing, also known as bundling, grouping, and binding, means bringing together data and the methods that operate on the data. The component can be a function, a class, or an object. Packing enables "controlling access to that component." When we have the data and related methods in a single unit, we can control how it is accessed outside the unit. This process is called Encapsulation.

## Example: Different Ways to Create an Object

```javascript
const user = {
  name: "Akram",
  age: 25,
  getBirthYear: function () {
    return new Date().getFullYear() - this.age;
  },
};

console.log(user);

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Akram";
me.printIntroduction();
console.dir(me);
```

## Object Creation Using a Function

```javascript
function Car(brand, fuelType, model, releaseDate) {
  const car = {
    brand,
    fuelType,
    model,
    releaseDate,
    getYearsOld: function () {
      return new Date().getFullYear() - this.releaseDate + " years old";
    },
  };
  return car;
}

const car1 = Car("Tesla", "electric", "S", 2023);
const car2 = Car("Tata", "petrol", "indica", 2000);

console.log(car1);
console.log(car2);
```

## Object Creation Using Function Constructor

```javascript
function CreateEmployee(name, designation, salary, age) {
  this.name = name;
  this.designation = designation;
  this.age = age;
  this.salary = salary;
}

CreateEmployee.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

const em1 = new CreateEmployee("Abrar", "Lawyer", 120000, 20);
const em2 = new CreateEmployee("Aaisha", "Digital Marketer", 150000, 20);

console.log(em1);
console.log(em2);
console.log(em1.getBirthYear());
```

## Abstraction

In abstraction, we hide the complexity of a system from the end user and show them details that matter to them. We hide implementation details and present a simple interface to deal with.

### Example Without Abstraction of Gear Property

```javascript
function Vehicle(model) {
  this.model = model;
  this.gear = 1;

  this.doSomeMagicWithGearStick = function () {
    console.log(
      "I am doing something very complicated thing for the gear " + this.gear
    );
  };

  this.changeGear = function (changeTo) {
    if (changeTo > 5) {
      throw new Error("Gear cannot be more than 5.");
    }
    this.gear = changeTo;
    this.doSomeMagicWithGearStick();
  };
}

let veh1 = new Vehicle("Toyota Corolla");
console.log(veh1);
```

### Example With Abstraction

```javascript
function AbsVehicle(model) {
  this.model = model;
  let gear = 1;

  this.doSomeMagicWithGearStick = function () {
    console.log(
      "I am doing something very complicated thing for the gear " + gear
    );
  };

  this.changeGear = function (changeTo) {
    if (changeTo > 5) {
      throw new Error("Gear cannot be more than 5.");
    }
    gear = changeTo;
    this.doSomeMagicWithGearStick();
  };
}

let absVehicle = new AbsVehicle("Bmw s class");
console.log(absVehicle);
```

## Polymorphism

Polymorphism is a core concept in object-oriented programming that allows objects of different types to be treated as objects of a common super type. It is the ability of different objects to respond to the same interface, meaning the same method or property can be used on different types of objects. This allows for flexible and reusable code, as functions and methods can operate on objects of different classes without knowing their exact types.

### Key Characteristics

- **Shared Interface**: Polymorphic objects implement a shared interface, making them interchangeable in code that expects that interface.
- **Versatility and Maintainability**: They enable the creation of code that is more versatile and easier to maintain since it can be applied to various objects with consistent behavior.
- **Achieved Through Composition**: Polymorphism can be achieved through object composition and adherence to a common interface.

### Example

```javascript
const circle = {
  radius: 5,
  calculateArea: function () {
    return Math.PI * this.radius * this.radius;
  },
};

const square = {
  side: 4,
  calculateArea: function () {
    return this.side * this.side;
  },
};

function printArea(shape) {
  console.log(`The area is: ${shape.calculateArea()}`);
}

printArea(circle); // Outputs the area of the circle
printArea(square); // Outputs the area of the square
```

## Prototypal Inheritance

Prototype inheritance in JavaScript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class with child classes.

### Example

```javascript
function CreateNewEmp(name, designation, salary, age) {
  this.name = name;
  this.designation = designation;
  this.age = age;
  this.salary = salary;
}

CreateNewEmp.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

const emp1 = new CreateNewEmp("Abrar", "Lawyer", 120000, 20);
const emp2 = new CreateNewEmp("Aaisha", "Digital Marketer", 150000, 20);

console.log(emp1);
console.log(emp2);
console.log(emp1.getBirthYear());
```

## Resources

- [Prototype Inheritance in JavaScript - Scaler](https://www.scaler.com/topics/javascript/prototype-inheritance-in-javascript/)
- [JavaScript Prototype Inheritance - YouTube](https://www.youtube.com/watch?v=wstwjQ1yqWQ)

### Prototype Chain

Whenever you create an object with a function constructor, it will have its own prototype object that contains the constructor function as a method. You can also add new methods to that prototype.

The final chain looks like this:
`createdObject --> prototypeOF'createdObject' --> prototypeOf'ObjectClass' --> null`
