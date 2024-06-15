class VehicleBase {
  /**
   * Remember if you wanna make a property private inside constructor of a
   *  class make sure you declare the property in top level of the Class.
   *  Below  Im declaring the property 'yearReleased' as private and I need to use it
   *  inside the constructor
   * */

  #yearReleased;

  constructor(type, brand, model, yearReleased) {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.#yearReleased = yearReleased;
  }
  // speed property is a public class field
  speed = 1000;

  /* unit is a private field  if you wanna create a private field you can add
     '#' to start with the field name 
     
     Note: Remember unit can be accessed inside
     the class block but outside the class it is not accessible
  */
  #unit = "km";
  printYearsOld() {
    return Date().getFullYear() - this.#yearReleased;
  }
  getUnit() {
    // u can access the private field like this give below
    return this.#unit;
  }
}

const car1 = new VehicleBase("fuel", "Honda", "ertiga", 2002);

// Trying to access private fields from outside the class
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
