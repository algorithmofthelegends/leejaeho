const localInput = `
38
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
    primeNumber.push(i);
    primeNumber.push(i);
    primeNumber.push(i);
  }

  return v;
});

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

let pem = new Array(primeNumber.length - 4).fill(0);
pem.push(1);
pem.push(1);
pem.push(1);
pem.push(1);

let result;
while (true) {
  let t = [];
  pem.forEach((v, i) => {
    if (v === 1) t.push(primeNumber[i]);
  });

  if (t[0] + t[1] + t[2] + t[3] === input) {
    result = t;
    break;
  }

  const [nextL, check] = nextPermutation(pem);
  if (check) pem = nextL;
  else break;
}

console.log(result ? result.join(" ") : -1);
