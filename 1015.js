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

const N = input.shift();
const A = input
  .shift()
  // .trim()
  .split(/\s+/)
  .map((v) => +v);
const B = [...A];
B.sort((a, b) => a - b);

A.forEach((v, i) => {
  const p = B.indexOf(v);
  B[p] = -1;
  process.stdout.write(p + (i === A.length - 1 ? "" : " "));
});
