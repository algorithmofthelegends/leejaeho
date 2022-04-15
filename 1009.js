const localInput = `
5
1 6
3 7
6 2
7 100
10 10
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

let T = +input.shift();

while (T--) {
  // fetch a and b
  let [a, b] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);

  let result = 1;

  // multiply until b is 0 and keep  remainder
  while (b--) result = (result * a) % 10;

  // if reuslt = 0 it means 10's computer
  console.log(result === 0 ? 10 : result);
}
