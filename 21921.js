///////////////// input //////////////////
const localInput = `
7 5
1 1 1 1 1 5 1
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const [N, X] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

const views = input
  .shift()
  .split(/\s+/)
  .map((v) => +v)
  .reduce((prev, cur) => {
    prev.push(prev.length > 0 ? prev[prev.length - 1] + cur : cur);
    return prev;
  }, [])
  .map((v, i, arr) => {
    return i - X >= 0 ? v - arr[i - X] : v;
  })
  .sort((a, b) => b - a);

///////////////// logic //////////////////
let count = 1;
let result = views[0];
while (count < views.length && views[count] === result) count++;

if (result === 0) {
  console.log("SAD");
} else {
  console.log(result);
  console.log(count);
}
