const localInput = `
38
`;

const input = +(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
).trim();

const numbers = [...Array.from(Array(input + 1).keys()).fill(true)];

let primeNumber = [];

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

let result = [];
if (input < 8) console.log(-1);
else {
  result.push(2);
  result.push(input % 2 === 0 ? 2 : 3);
  const N = input - (input % 2 === 0 ? 4 : 5);

  for (let i = 0; i < primeNumber.length; i++) {
    const curPrime = primeNumber[i];
    const sub = N - curPrime;
    if (primeNumber.includes(sub)) {
      result.push(curPrime);
      result.push(sub);
      break;
    }
  }
}

console.log(result.join(" "));
