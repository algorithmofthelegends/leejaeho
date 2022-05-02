///////////////// input //////////////////
const localInput = `
2
`;

const input = +(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
).trim();
///////////////// input //////////////////

///////////////// logic //////////////////

const increaseNumber = (n) => {
  n *= 10;
  n += 1;
  count++;

  return n;
};

let result = -1;
let count = input.toString().split("").length;
let number = +"1".repeat(count);

if (number === input) number = increaseNumber(number);

while (count < 10000000) {
  while (number < input) number = increaseNumber(number);
  const remain = (number %= input);

  if (remain === 0) {
    result = count;
    break;
  }
  number = remain;
}

console.log(result);
