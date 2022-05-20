// 18
package main

import (
	"fmt"
	"strconv"
)

func main() {
	var N int
	fmt.Scan(&N)

	nums := make([][]int, 10)
	sums := make([][]int, 10)

	for i := range nums {
		nums[i] = make([]int, 10)
		sums[i] = make([]int, 10)

		// initialize first row
		if i == 0 {
			for j := range nums[i] {
				nums[i][j] = 1

				// sums logic
				if j == 0 {
					sums[i][j] = 0
				} else {
					sums[i][j] = sums[i][j-1] + nums[i][j]
				}
			}
		} else {
			for j := range nums[i] {
				// when first digit is zero value is zero
				if j == 0 {
					nums[i][j] = 0
				} else {
					for k := 0; k < j; k++ {
						nums[i][j] += nums[i-1][k]
					}

					if nums[i][j] != 0 {
						if sums[i][j-1] == 0 {
							sums[i][j] = sums[i-1][9] + nums[i][j]
						} else {
							sums[i][j] = sums[i][j-1] + nums[i][j]
						}
					}
				}
			}
		}
	}

	result := ""
	digit, appendedN := -1, -1

	for i := range nums {
		if digit != -1 && appendedN != -1 {
			break
		}

		for j := range nums[i] {
			if nums[i][j] >= N {
				digit = i
				appendedN = j
				break
			}
		}
	}

	if digit != -1 && appendedN != -1 {
		fmt.Println(findNumber(digit, appendedN, result, sums[digit][appendedN]-nums[digit][appendedN]))
	} else {
		fmt.Println("Test")
	}
}

func findNumber(digit int, appendedN int, result string, remains int) string {
	if digit >= 0 {
		result += strconv.Itoa(appendedN)

	}

	return result
}
