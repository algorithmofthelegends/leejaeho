/*
2
1
3
2
3
*/

package main

import "fmt"

func calc(a int, b int) int {
	if a == 0 {
		return b
	} else {
		result := 0
		for i := 1; i <= b; i++ {
			result += calc(a-1, i)
		}

		return result
	}
}

func main() {
	var T int

	fmt.Scanln(&T)

	for i := 0; i < T; i++ {
		var a, b int
		fmt.Scanln(&a)
		fmt.Scanln(&b)
		fmt.Println(calc(a, b))
	}
}
