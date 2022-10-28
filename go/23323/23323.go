/*
2
7 1
8589934591 1
*/
package main

// import (
// 	"fmt"
// 	"math"
// )

// func rec(n uint64, m uint64) int {
// 	var i uint64
// 	var result int

// 	if n == 0 {
// 		return 1
// 	}

// 	for i = 0; i <= m; i++ {
// 		result = int(math.Max(float64(result), float64(rec((n+i)/2, m-i))))
// 	}

// 	return result + 1
// }

// func main() {
// 	var T int
// 	fmt.Scan(&T)

// 	for i := 0; i < T; i++ {
// 		var n, m uint64
// 		fmt.Scanf("%d %d", &n, &m)
// 		fmt.Println(rec(n, m) - 1)
// 	}
// }

import (
	"fmt"
)

func main() {
	var T int
	fmt.Scan(&T)

	for i := 0; i < T; i++ {
		var n, m uint64
		fmt.Scanf("%d %d", &n, &m)

		var result uint64
		for n > 0 {
			if m > 0 && n == 1 {
				result += (1 + m)
				break
			}

			n = n >> 1
			result++
		}

		fmt.Println(result)
	}
}
