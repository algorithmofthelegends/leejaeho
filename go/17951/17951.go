/*
8 2
12 7 19 20 17 14 9 10
*/
package main

import "fmt"

func main() {
	var N, K int

	fmt.Scanf("%d %d", &N, &K)

	l := make([]int, N)

	for i := range l {
		fmt.Scan(&l[i])
	}

	fmt.Println("")
}
