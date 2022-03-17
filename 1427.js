console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("")
    .sort((a, b) => (a > b ? -1 : a === b ? 0 : 1))
    .join("")
);
