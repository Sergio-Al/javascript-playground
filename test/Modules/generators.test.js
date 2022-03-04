describe("Testing the generator functions", () => {
  function* fibonacciSequence() {
    let x = 0,
      y = 1;
    for (;;) {
      yield y;
      [x, y] = [y, x + y];
    }
  }

  test("should return the correct nth fibonacci number", () => {
    function fibonacci(n) {
      for (let f of fibonacciSequence()) {
        if (n-- <= 0) return f;
      }
    }

    expect(fibonacci(20)).toBe(10946);
  });

  test("should generate the correct order of a fibonacci sequence", () => {
    function* take(n, iterable) {
      let it = iterable[Symbol.iterator]();
      while (n-- > 0) {
        let next = it.next();
        if (next.done) return;
        else yield next.value;
      }
    }

    expect([...take(8, fibonacciSequence())]).toStrictEqual([
      1, 1, 2, 3, 5, 8, 13, 21,
    ]);
  });

  test("should generate an array ")
});
