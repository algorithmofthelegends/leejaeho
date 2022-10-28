/*
4
25.96 Y C C
18.14 Y C C
18.29 Y C C
69.90 Y C C
*/
package main

import (
	"fmt"
	"math"
)

func main() {
	var T int
	fmt.Scan(&T)

	color := map[string]float64{
		"W": 5,
		"O": 10,
		"Y": 15,
		"B": 20,
		"G": 30,
		"R": 45,
	}

	for i := 0; i < T; i++ {
		var price float64
		var d, c, p string
		fmt.Scanf("%f %s %s %s\n", &price, &d, &c, &p)

		np := price * ((100 - color[d]) / 100)
		if c == "C" {
			np *= 0.95
		}

		var decimal float64
		if p == "C" {
			decimal = 10
			np = np * 10 * decimal
		} else {
			decimal = 100
			np = np * 10 * decimal
		}

		if int(np)%10 <= 5 {
			np = math.Floor(np/10) / decimal
		} else {
			np = math.Ceil(np/10) / decimal
		}

		fmt.Printf("$%.2f\n", np)
	}
}
