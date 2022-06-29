/*
3 4
CCC
*/
package main

import (
	"fmt"
	"strings"
)

func move(n int, from byte, to byte, pass byte, cur *string, idx int, count *int) {
	if n == 1 {
		(*cur)[idx] = to
		(*count)++
	}
}

func main() {
	var N, M int
	fmt.Scanf("%d %d", &N, &M)

	var dest string
	fmt.Scanf("%s", &dest)

	cur := strings.Repeat("A", N)
	strCal := 'A' + 'B' + 'C'

	count := 0
	for i := len(cur) - 1; i >= 0; i-- {
		if cur[i] == dest[i] {
			continue
		}

		pass := strCal - (rune(cur[i]) + rune(dest[i]))
		move(i+1, cur[i], dest[i], byte(pass), &cur, i, &count)
	}
	fmt.Println("")
}
