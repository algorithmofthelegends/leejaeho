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
  graph[u][v] = graph[u][v] === 0 ? d : Math.min(graph[u][v], d);
  graph[v][u] = graph[v][u] === 0 ? d : Math.min(graph[v][u], d);
}

let result = -1;
///////////////// function //////////////////
const dfs = (graph, node, footprint, sum) => {
  footprint[node] = 1;
  if (footprint.every((v) => v === 1))
    result = result === -1 ? sum : Math.min(result, sum);
  else
    graph[node].forEach((path, destination) => {
      if (
        path !== 0 &&
        gender[node] !== gender[destination] &&
        footprint[destination] === 0
      )
        dfs(graph, destination, footprint, sum + graph[node][destination]);
    });

  footprint[node] = 0;
  return;
};

///////////////// logic //////////////////

for (let origin = 1; origin <= N; origin++) {
  const footprint = new Array(N + 1).fill(0).map((v, i) => (i === 0 ? 1 : 0));
  dfs(graph, origin, footprint, 0);
}

console.log(result);
