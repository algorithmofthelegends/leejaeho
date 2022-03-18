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
  return new Array(n + 1).fill(0, 0, n + 1);
});

// set road
new Array(m).fill(0).forEach(() => {
  const [u, v, b] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);

  if (b) {
    road[u][v] = 2;
    road[v][u] = 2; // only bidirectional
  } else {
    road[u][v] = 2;
    road[v][u] = 1;
  }
});

// search logic
// const bfs = (start, dest) => {
//   const footprint = new Array(n + 1).fill(0, 0, n + 1);

//   const q = [];
//   q.push({ node: start, count: 0 });
//   footprint[start] = 1;

//   while (q.length) {
//     const { node, count } = q.shift();
//     // if get to destination stop
//     if (node === dest) {
//       return count;
//     }

//     // find way can go
//     road[node].forEach((direction, nextNode) => {
//       if (!footprint[nextNode] && direction) {
//         // write footprint and go
//         footprint[nextNode] = 1;
//         q.push({ node: nextNode, count: direction === 1 ? count + 1 : count });
//       }
//     });
//   }
// };

const footprint = new Array(n + 1).fill(0, 0, n + 1);
let result = [];
const dfs = (node, dest, count) => {
  if (node === dest) {
    result.push(count);
    return;
  }

  // find way can go
  road[node].forEach((direction, nextNode) => {
    if (!footprint[nextNode] && direction) {
      // write footprint and go
      footprint[nextNode] = 1;
      dfs(nextNode, dest, direction === 1 ? count + 1 : count);
      footprint[nextNode] = 0;
    }
  });
};

// question start
const k = parseInt(input.shift());
input.forEach((value) => {
  const [u, v] = value.split(/\s+/).map((v) => +v);
  // check same node
  if (u === v) console.log(0);
  else {
    // using bfs
    // console.log(bfs(u, v));
    // using dfs
    dfs(u, v, 0);
    console.log(result.sort()[0]);
    result = [];
    footprint.fill(0, 0, n + 1);
  }
});
