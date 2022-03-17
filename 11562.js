const localInput = `
4 3
1 2 0
2 3 1
3 4 0
7
1 1
1 2
2 1
1 4
4 1
2 3
4 3
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const [n, m] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

const road = new Array(n + 1).fill(
  new Array(n + 1).fill(0, 0, n + 1),
  0,
  n + 1
);

// set road
new Array(m).fill(0).forEach(() => {
  const [u, v, b] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);
});

// question start
const k = parseInt(input.shift());
new Array(k).fill(0).forEach(() => {
  const [u, v] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);
});

console.log(road);
