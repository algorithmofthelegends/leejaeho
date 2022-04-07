const localInput = `
black
yellow
red
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

const colours = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

console.log(input.reduce((prev, cur, i) => {
  return i === 2 ? prev === '' ? '0' : prev + '0'.repeat(colours[cur]) : prev==='' && cur==='black' ? '' : prev + colours[cur].toString()
}, ''))