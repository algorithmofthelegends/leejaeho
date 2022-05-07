///////////////// input //////////////////
const localInput = `
3 3 100000
2 1 2
`;

const input = (
	process.platform === "linux"
		? require("fs").readFileSync("/dev/stdin").toString()
		: localInput
)
	.trim()
	.split("\n");

let [N, K, T] = input
	.shift()
	.split(/\s+/)
	.map((v) => +v);

const nadori = input
	.shift()
	.split(/\s+/)
	.map((v) => +v)
	.sort((a, b) => b - a);

///////////////// input //////////////////

///////////////// function //////////////////
const updateRemain = (remain, nadori, toggle) => {
	if (nadori.length) {
		if (toggle) T -= remain;
		nadori[0] += remain;
		remain = 0;
	}
};

///////////////// logic //////////////////

let remain = 0;
while (nadori.length) {
	remain = nadori.pop();
	updateRemain(remain, nadori, true);

	while (nadori.length && nadori[0] >= K) {
		remain = nadori.shift() - K;
		updateRemain(remain, nadori, false);
	}
}

T >= 0 && remain === 0 ? console.log("YES") : console.log("NO");
///////////////// logic //////////////////
