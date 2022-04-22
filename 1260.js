/**
 * 
 * 3 -> 1
    1 -> 2
    2 -> 5
    5 -> 4
 */
const dfs = (currentNode, graph, footprint, result) => {
  result.push(currentNode);
  footprint[currentNode] = 1;
  graph[currentNode].forEach((road, nextNode) => {
    if (road && !footprint[nextNode]) dfs(nextNode, graph, footprint, result);
  });

  return;
};

/**
 * 
 * 3 -> 1
3 -> 4
1 -> 2
4 -> 5
 * 
 */
const bfs = (start, graph, footprint, result) => {
  result.push(start);
  footprint[start] = 1;
  const q = [];
  q.push(start);

  while (q.length > 0) {
    const currentNode = q.shift();
    graph[currentNode].forEach((road, nextNode) => {
      if (road && !footprint[nextNode]) {
        result.push(nextNode);
        footprint[nextNode] = 1;
        q.push(nextNode);
      }
    });
  }
};

const localInput = `
5 5 3
5 4
5 2
1 2
3 4
3 1
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

let [N, M, V] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

const graph = new Array(N + 1)
  .fill(0, 0, N + 1)
  .map((v) => new Array(N + 1).fill(0, 0, N + 1));

/**
 * [
  [
    0,
    0,
    0,
    0,
    0,
  ],
  [
    0,
    0,
    1,
    1,
    1,
  ],
  [
    0,
    1,
    0,
    0,
    1,
  ],
  [
    0,
    1,
    0,
    0,
    1,
  ],
  [
    0,
    1,
    1,
    1,
    0,
  ],
]
 */
while (M--) {
  const [u, v] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);

  graph[u][v] = 1;
  graph[v][u] = 1;
}

const footprint = new Array(N + 1).fill(0, 0, N + 1);
let result = [];

// dfs
dfs(V, graph, footprint, result);
console.log(result.join(" "));

result = [];
footprint.fill(0, 0, N + 1);
// bfs
bfs(V, graph, footprint, result);
console.log(result.join(" "));
