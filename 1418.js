///////////////// input //////////////////
const localInput = `
100000
100
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");
///////////////// input //////////////////

///////////////// logic //////////////////
const N = +input.shift();
const K = +input.shift();

const numbers = [...Array.from(Array(N + 1).keys()).fill(true)];

let primeNumber = [];

// Sieve of Eratosthenes
numbers.map((v, i) => {
  if (i === 0 || i === 1) return false;

  if (v) {
    if (i * i <= N) {
      let pow = 1;
      let n = i * pow;
      while ((n = i * pow) <= N) {
        numbers[n] = false;
        pow++;
      }
    }

    primeNumber.push(i);
  }

  return v;
});

const results = [...Array.from(Array(N + 1).keys())].filter((n) => {
  if (n === 0) return false;
  if (n === 1) return true;

  return primeNumber.every((prime) => {
    return prime > n ? true : n % prime === 0 ? prime <= K : true;
  });
});

console.log(results.length);
