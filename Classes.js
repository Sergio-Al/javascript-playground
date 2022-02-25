// Creating a class with the ES6 class keyword
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && x <= this.to;
  }

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() {
    return `(${this.from}...${this.to})`;
  }
}

// Example of use
let r = new Range(1, 7);
console.log(r.includes(2)); // true
console.log(r.toString()); // (1...7)
console.log([...r]); // [1,2,3,4,5,6,7]
