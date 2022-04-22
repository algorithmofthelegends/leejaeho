const localInput = `
5
10 50 20 30 40
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const N = +input.shift();
const numbers = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

// const result = [];

// numbers.forEach((number) => {
//   result.map((l) => {
//     if (l[l.length - 1] < number) l.push(number);
//     return l;
//   });

//   result.push([number]);
// });

// result.sort((a, b) => b.length - a.length);
// console.log(result[0].length);
// console.log(result[0].join(" "));

// numbers.forEach((number) => {
//   if (!result.includes(number)) result.push(number);
// });

// result.sort((a, b) => a - b);
// console.log(result.length);
// console.log(result.join(" "));

const result = new Array(N).fill(0).map((v) => []);

/**
 * result ===
 * [
  [
    10,
    20,
    30,
    40,
  ],
  [
    20,
    30,
    40,
  ],
  [
    30,
    40,
  ],
  [
    50,
  ],
  [
    40,
  ],
]
 */
for (let i = N - 1; i >= 0; i--) {
  let longest = [];
  for (let j = i; j < N; j++) {
    if (
      longest.length < result[j].length &&
      result[j].length > 0 &&
      result[j][0] > numbers[i]
    )
      longest = result[j];
  }

  result[i] = [numbers[i], ...longest];
}

result.sort((a, b) => b.length - a.length);
console.log(result[0].length);
console.log(result[0].join(" "));
