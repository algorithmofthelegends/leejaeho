// 7 2 4
package main

import (
	"fmt"
)

func main() {

	var N, M, K int
	fmt.Scanf("%d %d %d", &N, &M, &K)

	var acc int
	if M <= 3 {
		acc = 3 - M
		K -= acc
	} else if M > 3 {
		acc = M - 3
		K += acc
	}

	for 1 > K || N < K {
		if 1 > K {
			K += N
		} else {
			K -= N
		}
	}

	fmt.Println(K)
}
