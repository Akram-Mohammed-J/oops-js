/*
Four pillars of Object Oriented Programming

Encapsulation
Abstraction
Inheritance 
Polymorphism

 */

/*
Encapsulation

Encapsulation can be defined as “the packing of data and functions into one
component”. Packing, which is also known as bundling, grouping and binding,
simply means to bring together data and the methods which operate on data. The
component can be a function, a class or an object. Packing enables “controlling
access to that component”. When we have the data and related methods in a single
unit, we can control how is it accessed outside the unit. This process is called
Encapsulation.

*/

/**
 * Different ways to create a object
 */
const user = {
  name: "Akram",
  age: 25,
  getBirthYear: function () {
    return new Date().getFullYear() - this.age;
  },
};

console.log(user);

/**The Object.create() static method creates a new object, using an existing
   object as the prototype of the newly created object.
 */

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
/**The Object.create() static method creates a new object, using an existing
   object as the prototype of the newly created object.
 */
const me = Object.create(person);

// me object inherit the properties of Person and if you do a console and see
// isHuman, printIntroduction  it cannot be available directly inside the
// 'me Object' it will be available inside the prototypes of me object

/*
Hence this is proved:

The Object.create() static method creates a new object, using an existing
object as the prototype of the newly created object.*/

me.name = "Akram";

me.printIntroduction();

console.dir(me);

// object creation using normal  function

function Car(brand, fuelType, model, releaseDate) {
  const car = {
    brand,
    fuelType,
    model,
    releaseDate,
    getYearsOld: function () {
      return new Date().getFullYear() - this.releaseDate + " " + "years old";
    },
  };
  return car;
}

const car1 = Car("Tesla", "electric", "S", 2023);
const car2 = Car("Tata", "petrol", "indica", 2000);

console.log(car1);
console.log(car2);

//Object creation using function constructor

/**
 * Everything in Javascript  is an object
 *
 * If you invoke a function with new keyword then that is called as function
 * constructor constructor function always return an object even if you didn't
 * return anything
 *
 * As you know while using in above example normal function to create objects
 * the method 'getYearsOld' in the objects are duplicated each time when we
 * create objects
 *
 * When we use constructor function in the below example getBirthYear is created
 * once and it is inside the prototype of 'CreateEmployee' function 
 *
 * henever u create an object with function constructor it will have its own
   prototype object contains constructor function as method you can also add new
   method to that prototype like below example

   The final chain looks like this
  'createdObject; --> prototypeOF'createdObject' --> prototypeOf'ObjectClass'--> null
 
 */

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

/**
 * what is abstraction in js ? In abstraction, we hide the complexity of a
 * system from end user and show them details that matters to them. We hide
 * implementation details and present a simple interface to deal with.
 */

//example without abstraction of Gear property

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

/**
 * In the console we can see all the properties inclucing gear so anyone can
 * access the gear property and update it directy and change it 1000 or any
 * values. So we need to hide the gear property so that it can only access inside that constructor not outside
 */
console.log(veh1);

// With Abstraction

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

/**
* Polymorphic objects in JavaScript refer to objects that share a common
  interface, even when they are of different types or have different
  implementations. This concept enables objects to respond to the same set of
  methods or properties, promoting code uniformity and reusability. Here's a
  detailed explanation of polymorphic objects in JavaScript:

Definition: 

Polymorphic objects are objects of different types that share a
common interface, typically in the form of methods or properties. They allow for
code that works with a variety of objects as long as they adhere to the
specified interface.

Key Characteristics: 

Polymorphic objects implement a shared interface, making
them interchangeable in code that expects that interface.

They enable the creation of code that is more versatile and easier to maintain
since it can be applied to various objects with consistent behavior.
Polymorphism can be achieved through object composition and adherence to a
common interface.

Example: Let's create a polymorphic scenario using two different shapes (a
circle and a square) that respond to a common method, such as calculateArea.

 */

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

/**
 * Prototypal Inheritance:

   Prototype inheritance in javascript is the linking of
   prototypes of a parent object to a child object to share and utilize the
   properties of a parent class using a child class. Prototypes are hidden
   objects that are used to share the properties and methods of a parent class
   to child classes.

   read more here :https://www.scaler.com/topics/javascript/prototype-inheritance-in-javascript/
   watch this as well: https://www.youtube.com/watch?v=wstwjQ1yqWQ


 * prototype chain is nothing but its pointing to its parent object at and at the end of the chain it will point to null

   Whenever u create an object with function constructor it will have its own prototype object contains constructor function as method
   you can also add new method to that prototype like below example

   The final chain looks like this
   'createdObject; --> prototypeOF'createdObject' --> prototypeOf'ObjectClass'--> null
 */

// example :

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
