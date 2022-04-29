///////////////// input //////////////////
const localInput = `
2
`;

const input = +(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
).trim();
///////////////// input //////////////////

///////////////// logic //////////////////

const monkeyNumbers = [...new Array(16).keys()].map((v) => {
  return +"1".repeat(v + 1);
});

let result = -1;
for (let i = 0; i < 16; i++) {
  if (monkeyNumbers[i] > input && monkeyNumbers[i] % input === 0) {
    result = i + 1;
    break;
  }
}
console.log(result);
