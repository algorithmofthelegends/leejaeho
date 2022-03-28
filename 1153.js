const localInput = `
1000000
`;

const input = +(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
).trim();

const numbers = [...Array.from(Array(input + 1).keys()).fill(true)];

const primeNumber = [];

numbers.map((v, i) => {
  if (i === 0 || i === 1) return false;

  if (v) {
    if (i * i <= input) {
      let pow = 1;
      let n = i * pow;
      while ((n = i * pow) <= input) {
        numbers[n] = false;
        pow++;
      }
    }

    primeNumber.push(i);
  }

  return v;
});

const getPrimes = () => {
  primeNumber.forEach((a) => {
    primeNumber.forEach((b) => {
      primeNumber.forEach((c) => {
        primeNumber.forEach((d) => {
          if (a + b + c + d === input) return [a, b, c, d];
        });
      });
    });
  });
};

const result = getPrimes();

console.log(result ? result.join(" ") : -1);
