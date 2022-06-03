/*
4
1 2 3 4
*/
package main

import "fmt"

func prevPermutation(l *[]int) *[]int {
	i := len(*l) - 2
	if i < 0 {
		return nil
	}

	firstAsending := -1
	for ; i >= 0; i-- {
		if (*l)[i] > (*l)[i+1] {
			firstAsending = i
			break
		}
	}

	if firstAsending == -1 {
		return nil
	}

	j := len(*l) - 1
	for ; j > firstAsending; j-- {
		if (*l)[firstAsending] > (*l)[j] {
			swap(firstAsending, j, l)
			reverse(firstAsending+1, l)

			return l
		}
	}

	return nil
}

func swap(a int, b int, l *[]int) {
	(*l)[a] = (*l)[a] ^ (*l)[b]
	(*l)[b] = (*l)[a] ^ (*l)[b]
	(*l)[a] = (*l)[a] ^ (*l)[b]
}

func reverse(start int, l *[]int) {
	end := len(*l) - 1
	i := ((end - start) + 1) / 2
	for ; i > 0; i-- {
		swap(start, end, l)
		start++
		end--
	}
}

func main() {
	var N int
	fmt.Scan(&N)
	nums := make([]int, N)
	for i := range nums {
		fmt.Scan(&nums[i])
	}

	result := prevPermutation(&nums)

	if result == nil {
		fmt.Println("-1")
	} else {
		for i := range *result {
			fmt.Print((*result)[i])

			if i != N-1 {
				fmt.Print(" ")
			} else {
				fmt.Println("")
			}
		}
	}
}
