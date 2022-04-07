const localInput = `
555
`;

const input = +(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()

let acc = 1;

const check = (s) => {
  const l = s.split('')
  return l.every((c) => l.filter(e => e!==c).length === l.length-1)
}

let result=-1
while(acc < 100000) {
  // break if number is big
  if(acc > input) break

  const a = (input - acc).toString()
  const b = acc.toString()
  if(a !== '0' && b !== '0' && check(a+b)){
    result = [a, b]
    break
  }

  acc++
}

result === -1 ? console.log(-1) : console.log(result[0] + " " + "+ " + result[1]);
