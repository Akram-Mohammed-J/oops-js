# JavaScript Getter and Setter

In JavaScript, there are two kinds of object properties:

1. Data properties
2. Accessor properties

## Data Property

Here's an example of a data property that we have been using in the previous tutorials.

```javascript
const student = {
  // data property
  firstName: "Monica",
};
```

## Accessor Property

In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

- `get` - to define a getter method to get the property value
- `set` - to define a setter method to set the property value

### JavaScript Getter

In JavaScript, getter methods are used to access the properties of an object. For example,

```javascript
const student = {
  // data property
  firstName: "Monica",

  // accessor property (getter)
  get getName() {
    return this.firstName;
  },
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error
```

Run Code

In the above program, a getter method `getName()` is created to access the property of an object.

```javascript
get getName() {
    return this.firstName;
}
```

**Note:** To create a getter method, the `get` keyword is used.

And also when accessing the value, we access the value as a property.

```javascript
student.getName;
```

When you try to access the value as a method, an error occurs.

```javascript
console.log(student.getName()); // error
```

### JavaScript Setter

In JavaScript, setter methods are used to change the values of an object. For example,

```javascript
const student = {
  firstName: "Monica",

  // accessor property (setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student.firstName); // Monica

// change (set) object property using a setter
student.changeName = "Sarah";

console.log(student.firstName); // Sarah
```

Run Code

In the above example, the setter method is used to change the value of an object.

```javascript
set changeName(newName) {
    this.firstName = newName;
}
```

**Note:** To create a setter method, the `set` keyword is used.

As shown in the above program, the value of `firstName` is Monica.

Then the value is changed to Sarah.

```javascript
student.changeName = "Sarah";
```

**Note:** Setter must have exactly one formal parameter.

### JavaScript `Object.defineProperty()`

In JavaScript, you can also use the `Object.defineProperty()` method to add getters and setters. For example,

```javascript
const student = {
  firstName: "Monica",
};

// getting property
Object.defineProperty(student, "getName", {
  get: function () {
    return this.firstName;
  },
});

// setting property
Object.defineProperty(student, "changeName", {
  set: function (value) {
    this.firstName = value;
  },
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = "Sarah";

console.log(student.firstName); // Sarah
```

Run Code

In the above example, `Object.defineProperty()` is used to access and change the property of an object.

The syntax for using `Object.defineProperty()` is:

```javascript
Object.defineProperty(obj, prop, descriptor);
```

The `Object.defineProperty()` method takes three arguments.

1. The first argument is the `objectName`.
2. The second argument is the name of the property.
3. The third argument is an object that describes the property.

```

```
