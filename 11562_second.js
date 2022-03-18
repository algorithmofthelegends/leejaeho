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

const road = new Array(n + 1).fill(0, 0, n + 1).map((v) => {
  return new Array(n + 1).fill(5000000, 0, n + 1);
});

// set road
new Array(m).fill(0).forEach(() => {
  const [u, v, b] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);

  if (b) {
    road[u][v] = 0;
    road[v][u] = 0; // only bidirectional
  } else {
    road[u][v] = 0;
    road[v][u] = 1;
  }
});

// set self distance
[...Array(n + 1).keys()].forEach((i) => {
  if (i !== 0) road[i][i] = 0;
});

// floyd warshall
[...Array(n + 1).keys()].forEach((k) => {
  [...Array(n + 1).keys()].forEach((i) => {
    [...Array(n + 1).keys()].forEach((j) => {
      const tmp = road[i][k] + road[k][j];
      if (road[i][j] > tmp) road[i][j] = tmp;
    });
  });
});

// question start
const k = parseInt(input.shift());
input.forEach((value) => {
  const [u, v] = value.split(/\s+/).map((v) => +v);
  console.log(road[u][v]);
});
