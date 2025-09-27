// A class in JavaScript is a blueprint for creating objects with properties and methods.
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Zizi");
p1.greet();
