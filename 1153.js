const numbers = [
  ...Array.from(Array(1000000).keys()).filter((v) => v !== 0 && v !== 1),
];

const primeNumber = [];

numbers.forEach((v, i) => {
  if (primeNumber.every((p) => v % p !== 0)) primeNumber.push(v);
});

console.log(primeNumber);
