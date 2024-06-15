# VehicleBase Class Example

This example demonstrates the use of private and public fields in a JavaScript class. The `VehicleBase` class includes private fields, a public field, and methods to interact with these fields.

## Class Definition

```javascript
class VehicleBase {
  /**
   * Remember if you want to make a property private inside the constructor of a
   * class, make sure you declare the property at the top level of the Class.
   * Below, I'm declaring the property 'yearReleased' as private and I need to use it
   * inside the constructor.
   */

  #yearReleased;

  constructor(type, brand, model, yearReleased) {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.#yearReleased = yearReleased;
  }

  // speed property is a public class field
  speed = 1000;

  /**
   * unit is a private field. If you want to create a private field, you can add
   * '#' to start with the field name.
   *
   * Note: Remember unit can be accessed inside
   * the class block but outside the class it is not accessible.
   */
  #unit = "km";

  printYearsOld() {
    return new Date().getFullYear() - this.#yearReleased;
  }

  getUnit() {
    // You can access the private field like this
    return this.#unit;
  }
}

const car1 = new VehicleBase("fuel", "Honda", "ertiga", 2002);
```

## Trying to Access Private Fields from Outside the Class

Attempting to access or modify private fields from outside the class should result in a syntax error.

```javascript
try {
  console.log(car1.#unit); // This should throw a syntax error
} catch (error) {
  console.error("Error:", error);
}

try {
  car1.#unit = 20; // This should throw a syntax error
} catch (error) {
  console.error("Error:", error.message);
}
```

## Explanation

- **Private Fields**: The `#yearReleased` and `#unit` fields are private and cannot be accessed or modified outside the class.
- **Public Fields**: The `type`, `brand`, `model`, and `speed` fields are public and can be accessed or modified outside the class.
- **Methods**:
  - `printYearsOld()`: Calculates and returns the age of the vehicle based on the current year.
  - `getUnit()`: Returns the value of the private field `#unit`.

When you try to access `#unit` directly from an instance of `VehicleBase`, it will throw a syntax error, demonstrating the encapsulation provided by private fields.
