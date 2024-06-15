/**
 * Public and private static properties Class fields syntax can be used to
   create public and private static properties and methods as well:
 * 
 */

class FakeMath {
  // `PI` is a static public property.
  static PI = 22 / 7; // Close enough.

  // `#totallyRandomNumber` is a static private property.
  static #totallyRandomNumber = 4;

  // `#computeRandomNumber` is a static private method.
  static #computeRandomNumber() {
    return FakeMath.#totallyRandomNumber;
  }

  // `random` is a static public method (ES2015 syntax)
  // that consumes `#computeRandomNumber`.
  static random() {
    console.log("I heard you like random numbers…");
    return FakeMath.#computeRandomNumber();
  }
}

FakeMath.PI;
// → 3.142857142857143
// FakeMath.random();
// logs 'I heard you like random numbers…'
// → 4
// FakeMath.#totallyRandomNumber;
// → SyntaxError
// FakeMath.#computeRandomNumber();
// → SyntaxError

/**
   * The static keyword defines a static method or field for a class, or a static
     initialization block 
     Static properties cannot be directly accessed on instances of the class.
     Instead, they're accessed on the class itself.
  
      
     Static methods are often utility functions, such as functions to create or clone
     objects, whereas static properties are useful for caches, fixed-configuration,
     or any other data you don't need to be replicated across instances.
   * 
   */

class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

const h = new ClassWithStaticMethod();
const t = new ClassWithStaticMethod();
console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."
