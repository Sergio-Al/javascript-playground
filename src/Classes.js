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

// Extending a class (Number)
console.log("\nExtending a class\n");
Number.prototype.times = function (f, context) {
  let n = this.valueOf();
  for (let i = 0; i < n; i++) f.call(context, i);
};

let n = 3;
n.times((i) => {
  console.log(`Repeating ${i} times`);
});

/* Creating subclasses */

// Creating a subclass (old way) of Range
function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}

// if our Span prototype inherits form the Range prototype
Span.prototype = Object.create(Range.prototype);

// We define our own constructor property
Span.prototype.constructor = Span;

// By defining our own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function () {
  return `(${this.from}... +${this.to - this.from})`;
};

// Creating a subclass with class keyword
// extending a build-in method
class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

// testing Arrays
console.log("\ntesting EZArray\n");
let a = new EZArray();
console.log(a instanceof EZArray);
console.log(a instanceof Array);
a.push(1, 3, 4, 3, 2);
a.pop();
console.log(a.first);
console.log(a.last);
a[1];
console.log(`isArray from Array class? ${Array.isArray(a)}`);
console.log(`isArray from EZArray class? ${EZArray.isArray(a)}`);
console.log(
  `EZArray prototype inherits from Array prototype? ${Array.prototype.isPrototypeOf(
    EZArray.prototype
  )}`
);
console.log(`EZArray inherits static methods and properties becaues EZArray
  inherits from array. This is a special feature of the extends keyword and is not
  possible before ES6.
${Array.isPrototypeOf(EZArray)}`);
