/*
1
2
3
5
8
13
21
34
55
89
*/
package main

import (
	"fmt"
	"math"
)

func main() {
	mushroom := new([10]uint32)

	result := uint32(0)

	for i := range mushroom {
		fmt.Scanf("%d", &mushroom[i])
		if i != 0 {
			mushroom[i] += mushroom[i-1]
		}

		if math.Abs(float64(100)-float64(result)) >= math.Abs(float64(100)-float64(mushroom[i])) && result < mushroom[i] {
			result = mushroom[i]
		}
	}

	fmt.Println(result)
}
