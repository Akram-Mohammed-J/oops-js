# JavaScript Class Inheritance

## Class Inheritance

Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability.

To use class inheritance, you use the `extends` keyword. For example,

```javascript
// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {}

let student1 = new Student("Jack");
student1.greet();
```

Run Code

**Output**

```
Hello Jack
```

In the above example, the `Student` class inherits all the methods and properties of the `Person` class. Hence, the `Student` class will now have the `name` property and the `greet()` method.

Then, we accessed the `greet()` method of `Student` class by creating a `student1` object.

## JavaScript `super()` Keyword

The `super` keyword used inside a child class denotes its parent class. For example,

```javascript
// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    console.log("Creating student class");

    // call the super class constructor and pass in the name parameter
    super(name);
  }
}

let student1 = new Student("Jack");
student1.greet();
```

Here, `super` inside `Student` class refers to the `Person` class. Hence, when the constructor of `Student` class is called, it also calls the constructor of the `Person` class which assigns a `name` property to it.

## Overriding Method or Property

If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. This concept is called method overriding. For example,

```javascript
// parent class
class Person {
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed";
  }

  greet() {
    console.log(`Hello ${this.name}.`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    // call the super class constructor and pass in the name parameter
    super(name);

    // Overriding an occupation property
    this.occupation = "Student";
  }

  // overriding Person's method
  greet() {
    console.log(`Hello student ${this.name}.`);
    console.log("occupation: " + this.occupation);
  }
}

let p = new Student("Jack");
p.greet();
```

**Output**

```
Hello student Jack.
occupation: Student
```

Here, the `occupation` property and the `greet()` method are present in parent `Person` class and the child `Student` class. Hence, the `Student` class overrides the `occupation` property and the `greet()` method.

## Uses of Inheritance

- Since a child class can inherit all the functionalities of the parent's class, this allows code reusability.
- Once a functionality is developed, you can simply inherit it. No need to reinvent the wheel. This allows for cleaner code and is easier to maintain.
- Since you can also add your own functionalities in the child class, you can inherit only the useful functionalities and define other required features.
