const fs = require("fs");

///////////////// input //////////////////
const localInput = `
9901
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
).trim();
///////////////// input //////////////////

///////////////// logic //////////////////

const N = input
  .split("")
  .reverse()
  .map((v) => +v);

const sumFn = (monkeyNumbers, v, i) => {
  if (monkeyNumbers.length < i + 1) monkeyNumbers.push(v);
  else {
    const n = monkeyNumbers[i] + v;
    monkeyNumbers[i] = n % 10;
    if (Math.floor(n / 10) > 0) sumFn(monkeyNumbers, 1, i + 1);
  }
};

// initializing number
let result = -1;
let count = 0;
const monkeyNumbers = [];
N.forEach((v, i) => {
  sumFn(monkeyNumbers, v, i);
  count++;
});

while (count < 100000) {
  N.forEach((v, i) => {
    sumFn(monkeyNumbers, v, i);
    count++;
  });

  const test = Array.from(monkeyNumbers);
  try {
    fs.appendFileSync("tesData.txt", test.reverse().join("").concat("\n"));
  } catch (err) {
    console.log(err);
  }

  if (monkeyNumbers.every((v) => v === 1)) {
    result = monkeyNumbers.length;
    break;
  }
}

console.log(result);
