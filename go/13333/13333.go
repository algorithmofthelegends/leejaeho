/*
5
8 4 5 3 10
*/
package main

import (
	"fmt"
	"sort"
)

func main() {
	var N int
	fmt.Scan(&N)

	nums := make([]int, N)

	for i := range nums {
		fmt.Scan(&nums[i])
	}

	// sorting
	sort.Slice(nums[:], func(i, j int) bool {
		return nums[i] > nums[j]
	})

	var result int
	for k := 0; k <= N; k++ {
		for i := range nums {
			if nums[i] < k {
				break
			}

			if i+1 == k {
				result = k
			}
		}
	}

	fmt.Println(result)
}
