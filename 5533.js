const fs = require("fs");
///////////////// input //////////////////
const localInput = `
3
89 92 77
89 92 63
89 63 77
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

let N = +input.shift();
const board = [];

while (N--)
  board.push([
    ...input
      .shift()
      .split(/\s+/)
      .map((v) => +v),
    0,
  ]);
///////////////// input //////////////////

/**
 * 
89, 92, 77, 0 
89, 92, 63, 0 
89, 63, 77, 0 

89, 92, 77, 0 
89, 92, 63, 0 
89, 63, 77, 63 

89, 92, 77, 0 
89, 92, 63, 63 
89, 63, 77, 63 
 */
for (let i = 0; i < 3; i++) {
  board.forEach((v, index) => {
    // 같은 수가 없으면 결과에 입력
    if (
      board.every((ev, eIndex) => {
        return index === eIndex ? true : v[i] ^ ev[i];
      })
    )
      v[3] += v[i];
  });
}

board.forEach((v) => console.log(v[3]));
