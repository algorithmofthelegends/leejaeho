const localInput = `
8
4 1 6 1 3 6 1 4
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const N = parseInt(input.shift());
if (N !== 0) {
  const A = input
    .shift()
    .trim()
    .split(/\s+/)
    .map((v) => +v);
  const B = Array.from(A);
  B.sort();

  const history = new Array(N).fill(0);
  A.forEach((v, i) => {
    const p = B.indexOf(v, history[v]);
    history[v] = p + 1;
    process.stdout.write(p + (i === A.length - 1 ? "" : " "));
  });
}
