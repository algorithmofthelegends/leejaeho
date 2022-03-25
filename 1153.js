let numbers = [
  ...Array.from(Array(1000000).keys()).filter((v) => v !== 0 && v !== 1),
];

const primeNumber = [];

while (numbers.length) {
  const curNumber = numbers.shift();
  if (primeNumber.every((p) => curNumber % p !== 0))
    primeNumber.push(curNumber);
}

console.log(primeNumber);
