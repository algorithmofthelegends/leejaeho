const localInput = `
11
`;

const input = +(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
).trim();

let idx = 0;
let smallWrap = 0;
let result = -1;

while (smallWrap <= input) {
  const biggerWrap = input - smallWrap;
  if (biggerWrap % 5 === 0) {
    result = biggerWrap / 5 + idx;
    break;
  }

  idx++;
  smallWrap = 3 * idx;
}

console.log(result);
