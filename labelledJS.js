const arr = [3, 4, 3, 2, 1, 22, 3];
const myProm = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hi");
  }, 2000);
});

async function* myGenerator() {
  let i = 0, val = 2;
  while (i < 3) {
    yield val << i++;
  }
}

(async function () {
  for await (let value of myGenerator()) {
    console.log(value);
  }
})();
