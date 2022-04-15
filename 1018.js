const localInput = `
11 12
BWWBWWBWWBWW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBWWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const countPainting = (number, toggle) => {
  /**
   * check count
   * if
   * number = 01010101
   * toggle is odd result = [0,8]
   * toggle is even result = [8,0]
   */
  let odd = 0b01010101 ^ number;
  let even = 0b10101010 ^ number;

  const result = [0, 0];
  while (odd > 0) {
    if (odd & (1 === 1)) toggle % 2 === 0 ? result[0]++ : result[1]++;
    odd >>= 1;
  }
  while (even > 0) {
    if (even & (1 === 1)) toggle % 2 === 0 ? result[1]++ : result[0]++;
    even >>= 1;
  }

  return result;
};

// fetch N and M
const [N, M] = input
  .shift()
  .split(/\s+/)
  .map((v) => +v);

// make map
/**
 * [[wbwbwbwb],[wbwbwbwb], ...]
 */
const map = [];
input.forEach((v) => map.push(v));

let result = Number.MAX_SAFE_INTEGER;
for (let n = 0; n + 7 < N; n++) {
  for (let m = 0; m + 7 < M; m++) {
    // keeps count
    /**
     *  0 8
     *  0 8
     *  0 8
     *  0 8
     *  1 8
     *  0 8
     *  0 8
     *  0 8
     */
    const count = [0, 0];

    // check all 8 layers
    for (let layer = 0; layer < 8; layer++) {
      const [odd, even] = countPainting(
        parseInt(
          map[n + layer]
            .substring(m, m + 8)
            .split("")
            .map((c) => (c === "W" ? "0" : "1"))
            .join(""),
          2
        ),
        layer
      );

      count[0] = count[0] + odd;
      count[1] = count[1] + even;
    }

    result = Math.min(result, ...count);
  }
}

console.log(result);
