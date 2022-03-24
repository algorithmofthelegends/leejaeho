const localInput = `
How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#
`;

const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : localInput
)
  .trim()
  .split("\n");

let string;
while ((string = input.shift()) !== "#")
  console.log(
    string.split("").reduce((count, cur) => {
      if (["a", "e", "i", "o", "u"].includes(cur.toLowerCase())) count++;
      return count;
    }, 0)
  );
