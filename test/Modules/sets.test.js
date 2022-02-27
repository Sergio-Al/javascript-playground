describe("testing Set values", () => {
  let s = new Set();
  // the argument to the set() constructor need not be an
  // array: any iterable object is allowed
  let oneDigitPrimes = new Set([2, 3, 5, 6]);
  test("Size should be zero 0", () => {
    expect(s.size).toBe(0);
  });
  test("Size should be 2", () => {
    s.add(1).add([1, 3, 4]);
    expect(s.size).toBe(2);
  });
  test("Size should be 1", () => {
    s.delete(1);
    expect(s.size).toBe(1);
  });
  test("Size should be zero again (clear)", () => {
    s.clear();
    expect(s.size).toBe(0);
  });
  test("Set should have the expected member", () => {
    expect(oneDigitPrimes.has(3)).toBe(true);
  });
  test("Set should not have the expected member", () => {
    // the has method uses the strict equality operator ===
    expect(oneDigitPrimes.has("5")).toBe(false);
  });
  test("Set should Set class be iterable", () => {
    // The set class is iterable, you can use for/of loop to
    // sum all values
    // you also can use spread operator to convert to an Array
    let sum = 0;
    for (let p of oneDigitPrimes) {
      sum += p;
    }
    expect(sum).toBe(16);
    expect([...oneDigitPrimes].includes(2)).toBe(true);
    expect(Math.max(...oneDigitPrimes)).toBe(6);
  });
});
