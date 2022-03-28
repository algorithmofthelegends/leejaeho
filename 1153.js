const localInput = `
6
`;

const nextPermutation = (l) => {
  let firstDecreasing = -1;
  for (let i = l.length - 2; i >= 0; i--)
    if (l[i] < l[i + 1]) {
      firstDecreasing = i;
      break;
    }

  if (firstDecreasing === -1) return [l.reverse(), false];
  else {
    let nextBiggerIdx,
      nextBiggerV = Number.MAX_SAFE_INTEGER;
    for (let i = firstDecreasing + 1; i < l.length; i++) {
      if (l[firstDecreasing] < l[i] && l[i] < nextBiggerV) {
        nextBiggerV = l[i];
        nextBiggerIdx = i;
      }
    }

    l[nextBiggerIdx] = l[firstDecreasing];
    l[firstDecreasing] = nextBiggerV;

    return [
      [
        ...l.slice(0, firstDecreasing + 1),
        ...l.slice(firstDecreasing + 1).reverse(),
      ],
      true,
    ];
  }
};

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
    primeNumber.push(i);
    primeNumber.push(i);
    primeNumber.push(i);
  }

  return v;
});



let result;
while (true) {
  if (primeNumber[0] + primeNumber[1] + primeNumber[2] + primeNumber[3] === input) {
    result = primeNumber.slice(0, 4);
    break;
  }

  const [nextPrimeNumber, check] = nextPermutation(primeNumber);
  if (check) primeNumber = nextPrimeNumber;
  else break;
}

console.log(result ? result.join(" ") : -1);
