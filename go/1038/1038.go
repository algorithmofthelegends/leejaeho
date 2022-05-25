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
	result := make([]int, 0)

	for i := 0; i < 10; i++ {
		for j := 0; j < 10; j++ {
			if i == 0 {
				nums[i] = append(nums[i], j)
			} else {
				for k := 0; k < len(nums[i-1]); k++ {
					tmp := strconv.Itoa(nums[i-1][k])
					jString := strconv.Itoa(j)

					if jString[0] > tmp[0] {
						newNumber, _ := strconv.Atoi(jString + tmp)
						nums[i] = append(nums[i], newNumber)
					}
				}
			}
		}

		result = append(result, nums[i]...)
	}

	if N < len(result) {
		fmt.Println(result[N])
	} else {
		fmt.Println(-1)
	}
}

// func main() {
// 	var N int
// 	fmt.Scan(&N)

// 	nums := make([][]int, 10)
// 	sums := make([][]int, 10)

// 	for i := range nums {
// 		nums[i] = make([]int, 10)
// 		sums[i] = make([]int, 10)

// 		// initialize first row
// 		if i == 0 {
// 			for j := range nums[i] {
// 				nums[i][j] = 1

// 				// sums logic
// 				if j == 0 {
// 					sums[i][j] = 0
// 				} else {
// 					sums[i][j] = sums[i][j-1] + nums[i][j]
// 				}
// 			}
// 		} else {
// 			for j := range nums[i] {
// 				// when first digit is zero value is zero
// 				if j == 0 {
// 					nums[i][j] = 0
// 				} else {
// 					for k := 0; k < j; k++ {
// 						nums[i][j] += nums[i-1][k]
// 					}

// 					if nums[i][j] != 0 {
// 						if sums[i][j-1] == 0 {
// 							sums[i][j] = sums[i-1][9] + nums[i][j]
// 						} else {
// 							sums[i][j] = sums[i][j-1] + nums[i][j]
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}

// 	result := ""
// 	digit, appendedN := -1, -1

// 	for i := range nums {
// 		if digit != -1 && appendedN != -1 {
// 			break
// 		}

// 		for j := range nums[i] {
// 			if nums[i][j] >= N {
// 				digit = i
// 				appendedN = j
// 				break
// 			}
// 		}
// 	}

// 	if digit != -1 && appendedN != -1 {
// 		fmt.Println(findNumber(digit, appendedN, result, &nums, sums[digit][appendedN]-N))
// 	} else {
// 		fmt.Println("Test")
// 	}
// }

// // func findNumber(digit int, appendedN int, result string, nums *[][]int, remain int) string {
// // 	result += strconv.Itoa(appendedN)

// // 	if remain == 0 {
// // 		return findNumber(digit-1, 9, result, nums, remain)
// // 	}

// 	j := 0
// 	if digit == 0 {
// 		return result
// 	} else if digit == 1 {
// 		// find last digit number
// 		i := 0
// 		tmpSum := 0
// 		for ; j < 10; j++ {
// 			tmpSum += (*nums)[i][j]
// 			if tmpSum >= remain {
// 				break
// 			}
// 		}
// 	} else {
// 		i := digit - 1
// 		tmpSum := 0
// 		for ; j < 10; j++ {
// 			tmpSum += (*nums)[i][j]
// 			if tmpSum >= remain {
// 				break
// 			}
// 		}
// 	}

// 	return findNumber(digit-1, j, result, nums, remain)
// }
