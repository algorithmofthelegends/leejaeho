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
/**
 * dijkstra algorithm
 */
const dijkstraAlgorithm = (graph, origin) => {
  const dijkstra = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const prev = new Array(N + 1).fill(0);
  const check = new Array(N + 1).fill(0);
  // set origin value minimum
  dijkstra[origin] = 0;

  // check visitor
  for (let i = 1; i <= N; i++) check[i] = 1;

  while (check.some((v) => v === 1)) {
    // get minimum node
    const [value, node] = dijkstra.reduce((p, c, i) => {
      // initial value
      const [prev, idx] = p;
      return p.length === 0
        ? check[i] === 1
          ? [c, i]
          : []
        : prev > c && check[i] === 1
        ? [c, i]
        : [prev, idx];
    }, []);
    check[node] = 0;

    // traverse
    graph[node].forEach((path, destination) => {
      if (
        path !== 0 &&
        gender[node] !== gender[destination] &&
        check[destination] === 1
      ) {
        const alt = dijkstra[node] + graph[node][destination];
        if (alt < dijkstra[destination]) {
          dijkstra[destination] = alt;
          prev[destination] = node;
        }
      }
    });
  }

  return [prev, dijkstra];
};

///////////////// logic //////////////////
let result = Number.MAX_SAFE_INTEGER;

for (let origin = 1; origin <= N; origin++) {
  const [prev, dijkstra] = dijkstraAlgorithm(graph, origin);

  for (let i = 1; i <= N; i++) {
    if (i === origin) continue;

    const possibility = new Array(N + 1).fill(1);
    possibility[0] = 0;
    let target = i;

    while (target) {
      possibility[target] = 0;
      target = prev[target];
    }

    if (possibility.every((v) => v === 0) && result > dijkstra[i])
      result = dijkstra[i];
  }
}

console.log(result);
