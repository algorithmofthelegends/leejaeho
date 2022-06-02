/*
6
3 2 5 1 4 2
*/

package main

import (
	"fmt"
	"math"
)

func dfs(curIdx int, nums *[]int64, N int, sum int64, result *int64, opportunity int, returnIdx int) {
	tmpSum := sum + (*nums)[curIdx]

	if curIdx == N-1 {
		*result = int64(math.Max(float64(*result), float64(tmpSum)))
	} else {
		dfs(curIdx+1, nums, N, tmpSum, result, opportunity, returnIdx)
	}

	if opportunity < 2 {
		for i := returnIdx; i < curIdx; i++ {
			dfs(i, nums, N, tmpSum, result, opportunity+1, curIdx+1)
		}
	}

	return
}

func main() {
	var N int
	fmt.Scan(&N)

	nums := make([]int64, N)

	for i := 0; i < N; i++ {
		fmt.Scan(&nums[i])
	}

	var sum, result int64
	dfs(0, &nums, N, sum, &result, 0, 0)

	fmt.Println(result)
}
