///////////////// input //////////////////
const localInput = `
6 6
2
0 0 0 1
6 6 5 6
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const [M, N] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);
let K = +input.shift();
const traffics = [];
while (K--) {
  traffics.push(
    input
      .shift()
      .split(/\s+/)
      .map((v) => +v)
      .join(",")
  );
}
///////////////// input //////////////////

///////////////// function //////////////////
const possibleToGo = (a, b, c, d) => {
  return (
    a >= 0 &&
    a <= N &&
    b >= 0 &&
    b <= M &&
    c >= 0 &&
    d >= 0 &&
    c <= N &&
    d <= M &&
    !traffics.includes([a, b, c, d].join(",")) &&
    !traffics.includes([c, d, a, b].join(","))
  );
};

const bfs = (road, footprint, start) => {
  const q = [];
  q.push(start);
  road[0][0] = BigInt(1);

  while (q.length) {
    const [a, b] = q.shift();
    // calc current value
    for (let n = 0; n <= 1; n++) {
      for (let m = 0; m <= 1; m++) {
        if (n === 0 && m === 0) continue;
        if (n === 1 && m === 1) continue;
        const c = a - n;
        const d = b - m;

        if (possibleToGo(c, d, a, b))
          // road[a][b] = Math.max(road[a][b], road[c][d] + 1);
          road[a][b] = BigInt(road[c][d]) + BigInt(road[a][b]);
      }
    }

    // push nextNodes
    for (let n = 0; n <= 1; n++) {
      for (let m = 0; m <= 1; m++) {
        if (n === 0 && m === 0) continue;
        if (n === 1 && m === 1) continue;
        const c = a + n;
        const d = b + m;

        if (possibleToGo(a, b, c, d) && footprint[c][d] === 0) {
          q.push([c, d]);
          footprint[c][d] = 1;
        }
      }
    }
  }
};
///////////////// function //////////////////

///////////////// logic //////////////////

const road = new Array(N + 1)
  .fill(0)
  .map((v) => new Array(M + 1).fill(BigInt(0)));
const footprint = new Array(N + 1).fill(0).map((v) => new Array(M + 1).fill(0));

bfs(road, footprint, [0, 0]);

console.log(road[N][M].toString());
