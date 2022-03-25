const localInput = `
4
2 1 3 1
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
  const A = input.shift().split(" ");
  const B = Array.from(A);
  B.sort();

  const history = new Array(N).fill(0);
  const result = [];
  A.forEach((v) => {
    const p = B.indexOf(v, history[v]);
    history[v] = p + 1;
    result.push(p);
  });

  console.log(result.join(" "));
}
