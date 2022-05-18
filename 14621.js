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

///////////////// function //////////////////
/**
 * dijkstra algorithm
 */
const dijkstraAlgorithm = (graph, origin) => {
  const dijkstra = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const prev = new Array(N + 1).fill(0);
  // set origin value minimum
  dijkstra[origin] = 0;

  // check visitor
  const q = new Set();
  for (let i = 1; i <= N; i++) q.add(i);

  while (q.size) {
    // get minimum node
    const [value, node] = dijkstra.reduce((p, c, i) => {
      // initial value
      const [prev, idx] = p;
      return p.length === 0
        ? q.has(i)
          ? [c, i]
          : []
        : prev > c && q.has(i)
        ? [c, i]
        : [prev, idx];
    }, []);
    q.delete(node);

    // traverse
    graph[node].forEach((path, destination) => {
      if (
        path !== 0 &&
        gender[node] !== gender[destination] &&
        q.has(destination)
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
let result = -1;

const fs = require("fs");
/**
 * 
1: 
	 prev 0 	 dijkstra 0 	 prev 1 	 dijkstra 12 	 prev 1 	 dijkstra 10 	 prev 5 	 dijkstra 24 	 prev 2 	 dijkstra 17 
2: 
	 prev 2 	 dijkstra 12 	 prev 0 	 dijkstra 0 	 prev 1 	 dijkstra 22 	 prev 5 	 dijkstra 12 	 prev 2 	 dijkstra 5 
3: 
	 prev 3 	 dijkstra 10 	 prev 1 	 dijkstra 22 	 prev 0 	 dijkstra 0 	 prev 5 	 dijkstra 34 	 prev 2 	 dijkstra 27 
4: 
	 prev 2 	 dijkstra 24 	 prev 5 	 dijkstra 12 	 prev 1 	 dijkstra 34 	 prev 0 	 dijkstra 0 	 prev 4 	 dijkstra 7 
5: 
	 prev 2 	 dijkstra 17 	 prev 5 	 dijkstra 5 	 prev 1 	 dijkstra 27 	 prev 5 	 dijkstra 7 	 prev 0 	 dijkstra 0 
 */
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

    if (possibility.every((v) => v === 0))
      result =
        result === -1
          ? dijkstra[i]
          : result > dijkstra[i]
          ? dijkstra[i]
          : result;
  }
  fs.appendFileSync("14621.txt", `\n`);
}

console.log(result);
