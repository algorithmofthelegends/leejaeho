///////////////// input //////////////////
const localInput = `
5 7
M W W W M
1 2 12
1 3 10
4 2 5
5 2 5
2 5 10
3 4 3
5 4 7
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

const gender = ["M", ...input.shift().split(/\s+/)];
const graph = new Array(N + 1).fill(0).map((v) => new Array(N + 1).fill(0));

for (let i = 0; i < M; i++) {
  const [u, v, d] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);
  graph[u][v] = d;
  graph[v][u] = d;
}

///////////////// function //////////////////
const dijkstraAlgorithm = (graph, origin) => {
  const dijkstra = new Array(N + 1).fill(-1);

  const q = [];
  q.push([origin, 0]);
  dijkstra[origin] = 0;

  graph[origin].forEach((path, destination) => {
    if (path !== 0 && gender[origin] !== gender[destination])
      dijkstra[destination] = Math.max(
        dijkstra[destination],
        dijkstra[origin] + graph[origin][destination]
      );
  });
};

///////////////// logic //////////////////

/**
 * dijkstra algorithm
 */

for (let origin = 1; origin <= N; origin++) {
  // have path and not same gender save dijkstra value
  graph[origin].forEach((path, destination) => {
    if (path !== 0 && gender[origin] !== gender[destination])
      dijkstra[destination] = Math.max(
        dijkstra[destination],
        dijkstra[origin] + graph[origin][destination]
      );
  });
}

console.log("test");
