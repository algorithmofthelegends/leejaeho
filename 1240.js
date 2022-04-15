const localInput = `
4 2
2 1 2
4 3 2
1 4 3
1 2
3 2
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

// search logic
const bfs = (start, dest, nodes) => {
  const n = nodes.length;
  // [0,0,0,0,0,0]
  const footprint = new Array(n + 1).fill(0, 0, n + 1);

  const q = [];
  q.push({ node: start, count: 0 });
  footprint[start] = 1;

  while (q.length) {
    /**
     * 1 , 0
     * 2 , 2
     *
     * 3 , 0
     * 4 , 2
     * 1 , 5
     * 2 , 7
     */
    const { node, count } = q.shift();
    // if get to destination stop
    if (node === dest) {
      return count;
    }

    // find way can go
    nodes[node].forEach((v, nextNode) => {
      if (!footprint[nextNode] && v !== -1) {
        // write footprint and go
        footprint[nextNode] = 1;
        q.push({ node: nextNode, count: count + v });
      }
    });
  }
};

let [N, M] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

/**
   *[[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1]]
    [[-1,-1,-1,-1,-1],[-1,-1,2,-1,-1],[-1,2,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1]]
    [[-1,-1,-1,-1,-1],[-1,-1,2,-1,-1],[-1,2,-1,-1,-1],[-1,-1,-1,-1,2],[-1,-1,-1,2,-1]]
    [[-1,-1,-1,-1,-1],[-1,-1,2,-1,3],[-1,2,-1,-1,-1],[-1,-1,-1,-1,2],[-1,3,-1,2,-1]] 
   */
const nodes = new Array(N + 1).fill(0, 0, N + 1).map((v) => {
  return new Array(N + 1).fill(-1, 0, N + 1);
});

while (N-- > 1) {
  const [a, b, distance] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);
  nodes[a][b] = distance;
  nodes[b][a] = distance;
}

while (M--) {
  const [start, dest] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);

  console.log(bfs(start, dest, nodes));
}
