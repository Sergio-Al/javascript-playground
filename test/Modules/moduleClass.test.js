const { expect } = require("@jest/globals");
const { stats } = require("../../src/topics/Modules/moduleClass");

describe("Testing the module in functions", () => {
  const arrayOfNumbers = [1, 3, 5, 7, 9];
  test("Using an array to test the mean", () => {
    expect(stats.mean(arrayOfNumbers)).toBe(5);
  });
  test("Using an array to test the sttdev", () => {
    expect(stats.stddev(arrayOfNumbers)).toBe(Math.sqrt(10));
  });
});
