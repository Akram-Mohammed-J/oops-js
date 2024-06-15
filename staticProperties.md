# Static Block Example

In JavaScript, the static block in a class is a feature introduced in ECMAScript 2022 (ES13). The static block is executed once when the class is evaluated, not when an instance of the class is created. This is useful for performing initialization or setup tasks that are related to the class itself rather than any particular instance.

## Basic Example

Here’s a basic example to illustrate when the static block runs:

```javascript
class MyClass {
  static {
    console.log("Static block is running");
    this.staticProperty = "Static property value";
  }

  constructor() {
    console.log("Constructor is running");
  }
}

// At this point, the static block has already run
console.log(MyClass.staticProperty); // Output: "Static property value"

const instance = new MyClass(); // This will run the constructor
```

## Explanation

1. **Class Definition**: When the class `MyClass` is defined, the static block inside the class is immediately executed. This happens once, at the time of class evaluation.
2. **Static Property**: In the static block, you can set static properties or perform other static initialization.
3. **Creating an Instance**: When you create an instance of the class using `new MyClass()`, the constructor is run. The static block does not run again.

## Example with Multiple Instances

To emphasize that the static block runs only once:

```javascript
class AnotherClass {
  static {
    console.log("Static block is running");
    this.counter = 0;
  }

  constructor() {
    AnotherClass.counter++;
    console.log(`Constructor is running. Counter: ${AnotherClass.counter}`);
  }
}

const instance1 = new AnotherClass(); // Static block runs, constructor runs
const instance2 = new AnotherClass(); // Only constructor runs
const instance3 = new AnotherClass(); // Only constructor runs

console.log(AnotherClass.counter); // Output: 3
```

## Key Points

- **Execution Time**: The static block executes once when the class is first evaluated, not each time an instance is created.
- **Static Initialization**: It’s ideal for initializing static properties or performing class-level setup tasks.
- **Multiple Instances**: The static block does not re-run for subsequent instances of the class.

If you’re not seeing the expected behavior, make sure your environment supports static blocks (ES2022+). This feature is supported in modern browsers and Node.js versions that implement the ECMAScript 2022 standard.
