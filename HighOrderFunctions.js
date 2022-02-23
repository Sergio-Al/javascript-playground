// Higher Order Funcion
function compose(f, g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  };
}

const leftShift = (x, y) => x << y;
const square = (x) => x * x;
const res = compose(square, leftShift)(2, 2);
console.log(res);
