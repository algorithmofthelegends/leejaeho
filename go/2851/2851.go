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
	"os"
	"strconv"
)

func main() {
	mushroom := new([10]uint32)

	result := uint32(0)

	f1, err := os.Create("2851.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer f1.Close()

	/*
		1 3 6 11 19 32 53 87 142 231
	*/
	for i := range mushroom {
		fmt.Scanf("%d", &mushroom[i])
		if i != 0 {
			mushroom[i] += mushroom[i-1]
		}

		fmt.Fprintf(f1, strconv.Itoa(int(mushroom[i]))+" ")

		if math.Abs(float64(100)-float64(result)) >= math.Abs(float64(100)-float64(mushroom[i])) && result < mushroom[i] {
			result = mushroom[i]
		}
	}

	fmt.Println(result)
}
