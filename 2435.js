const localInput = `
10 2
3 -2 -4 -9 0 3 7 13 8 -3
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const [N, K] = input.shift().split(/\s+/)

const numbers = input.shift().split(/\s+/).reduce((prev, cur, i) => prev.concat(i === 0 ? parseInt(cur) : prev[i-1] + parseInt(cur)), [])

let result = Number.MIN_SAFE_INTEGER;
let idx = K-1

while(idx < numbers.length) {
  result = Math.max(idx-K < 0 ? numbers[idx] : numbers[idx] - numbers[idx-K], result)
  idx++
}

console.log(result)