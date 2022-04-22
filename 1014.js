const localInput = `
4
2 3
...
...
2 3
x.x
xxx
2 3
x.x
x.x
10 10
....x.....
..........
..........
..x.......
..........
x...x.x...
.........x
...x......
........x.
.x...x....
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

let T = +input.shift();

while (T--) {
  const [N, M] = input
    .shift()
    .split(/\s+/)
    .map((v) => +v);

  const map = [];
  const countMark = new Array(M).fill(0);

  for (let i = 0; i < N; i++) {
    map.push(
      input
        .shift()
        .split("")
        .map((v, idx) => {
          if (v === "x") countMark[idx]++;
          return v;
        })
    );
  }

  const [even, odd] = countMark.reduce(
    (prev, cur, idx) => {
      idx % 2 === 0 ? (prev[0] += N - cur) : (prev[1] += N - cur);
      return prev;
    },
    [0, 0]
  );

  console.log(Math.max(even, odd));
}
