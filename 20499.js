const [K, D, A] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("/");

console.log(
  parseInt(K) + parseInt(A) < parseInt(D) || D === "0" ? "hasu" : "gosu"
);
