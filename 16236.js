const fs = require("fs");

///////////////// input //////////////////
const localInput = `
6
5 4 3 2 3 4
4 3 2 3 4 5
3 2 9 5 6 6
2 1 2 3 4 5
3 2 1 6 5 4
6 6 6 6 6 6
`;

const input = (
	process.platform === "linux"
		? require("fs").readFileSync("/dev/stdin").toString()
		: localInput
)
	.trim()
	.split("\n");

const N = +input.shift();

const map = [];
for (let i = 0; i < N; i++) {
	map.push(
		input
			.shift()
			.split(/\s+/)
			.map((v) => +v)
	);
}
///////////////// input //////////////////

///////////////// function //////////////////
const curShark = (map) => {
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (map[i][j] === 9) {
				map[i][j] = 0;
				return [i, j];
			}
		}
	}
};

const possibleToGo = (x, y, map, sharkWeight, footprint) => {
	return (
		x >= 0 &&
		x < N &&
		y >= 0 &&
		y < N &&
		map[x][y] <= sharkWeight &&
		footprint[x][y] === 0
	);
};

const findNextFish = (map, curStanding, sharkWeight) => {
	const footprint = new Array(N).fill(0).map((v) => new Array(N).fill(0));

	let q = [];
	q.push([...curStanding, 0, 0]);

	while (q.length) {
		const [x, y, count, fishWeight] = q.shift();
		if (fishWeight > 0 && fishWeight < sharkWeight) {
			map[x][y] = 0;
			return [x, y, count, 1];
		}

		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				// pass diagonal and stop
				if (Math.abs(i + j) !== 1) continue;

				const nextX = x + i;
				const nextY = y + j;

				// move
				if (possibleToGo(nextX, nextY, map, sharkWeight, footprint)) {
					/**
					 * set priority >>> up >>> left
					 * javascript has no priority queue so reduce to find appropriate place whenever find next node
					 */
					const prevQueueLength = q.length;

					q = q.reduce((prev, cur) => {
						const [curX, curY, curCount] = cur;

						if (curCount === count + 1) {
							curX > nextX
								? (prev = [
										...prev,
										[nextX, nextY, count + 1, map[nextX][nextY]],
										cur,
								  ])
								: curX === nextX
								? curY > nextY
									? (prev = [
											...prev,
											[nextX, nextY, count + 1, map[nextX][nextY]],
											cur,
									  ])
									: prev.push(cur)
								: prev.push(cur);
						} else {
							prev.push(cur);
						}

						return prev;
					}, []);

					if (prevQueueLength === q.length)
						q.push([nextX, nextY, count + 1, map[nextX][nextY]]);

					footprint[nextX][nextY] = 1;
				}
			}
		}
	}
};

///////////////// function //////////////////

///////////////// logic //////////////////
let curStanding = curShark(map);
let sharkWeight = 2;
let fishCalc = 0;
let result;
let time = 0;

/**
 * time: 2, cur: 3,1, sharkWeight: 2 
time: 4, cur: 4,2, sharkWeight: 3 
time: 5, cur: 3,2, sharkWeight: 3 
time: 7, cur: 1,2, sharkWeight: 3 
time: 9, cur: 0,3, sharkWeight: 4 
time: 10, cur: 0,2, sharkWeight: 4 
time: 12, cur: 0,4, sharkWeight: 4 
time: 14, cur: 1,3, sharkWeight: 4 
time: 16, cur: 1,1, sharkWeight: 5 
time: 17, cur: 0,1, sharkWeight: 5 
time: 19, cur: 1,0, sharkWeight: 5 
time: 20, cur: 2,0, sharkWeight: 5 
time: 21, cur: 2,1, sharkWeight: 5 
time: 23, cur: 3,0, sharkWeight: 6 
time: 24, cur: 4,0, sharkWeight: 6 
time: 25, cur: 4,1, sharkWeight: 6 
time: 28, cur: 3,3, sharkWeight: 6 
time: 29, cur: 2,3, sharkWeight: 6 
time: 31, cur: 1,4, sharkWeight: 6 
time: 32, cur: 1,5, sharkWeight: 7 
time: 33, cur: 0,5, sharkWeight: 7 
time: 35, cur: 2,5, sharkWeight: 7 
time: 36, cur: 2,4, sharkWeight: 7 
time: 37, cur: 3,4, sharkWeight: 7 
time: 38, cur: 3,5, sharkWeight: 7 
time: 39, cur: 4,5, sharkWeight: 7 
time: 40, cur: 4,4, sharkWeight: 8 
time: 41, cur: 4,3, sharkWeight: 8 
time: 42, cur: 5,3, sharkWeight: 8 
time: 43, cur: 5,2, sharkWeight: 8 
time: 44, cur: 5,1, sharkWeight: 8 
time: 45, cur: 5,0, sharkWeight: 8 
time: 49, cur: 5,4, sharkWeight: 8 
time: 50, cur: 5,5, sharkWeight: 8 
time: 60, cur: 0,0, sharkWeight: 9 
 */
while ((result = findNextFish(map, curStanding, sharkWeight))) {
	const [x, y, count, fishWeight] = result;
	curStanding = [x, y];
	fishCalc += fishWeight;

	if (fishCalc === sharkWeight) {
		sharkWeight += 1;
		fishCalc = 0;
	}

	time += count;
	fs.appendFileSync(
		"16236.txt",
		`time: ${time}, cur: ${x},${y}, sharkWeight: ${sharkWeight} \n`
	);
}

console.log(time);
///////////////// logic //////////////////
