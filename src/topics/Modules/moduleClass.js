// this is how we define a stats module
const stats = (function () {
  // Utility function private to the module
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  // A public function that will be exported
  function mean(data) {
    return data.reduce(sum) / data.length;
  }

  // A public function that we will export
  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }

  return { mean, stddev };
})();

module.exports = { stats };
