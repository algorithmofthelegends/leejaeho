/*
3 2
2 2
*/

package main

import (
	"fmt"
)

func check(ch int, cw int, h int, w int) bool {
	if ch <= h && ch > 0 && cw > 0 && cw <= w {
		return true
	}

	return false
}

func main() {
	var w, h int
	fmt.Scanf("%d %d", &w, &h)
	var tw, th int
	fmt.Scanf("%d %d", &tw, &th)

	m := make([][]int, h+1)

	for i := range m {
		m[i] = make([]int, w+1)
	}

	m[1][1] = 1

	for i := 3; i <= w+h; i++ {
		for j := 1; j < i; j++ {
			ch := i - j
			cw := j

			if (ch+cw == tw+th) && ch != th && cw != tw {
				continue
			}

			if check(ch, cw, h, w) {
				for ph := 0; ph <= 1; ph++ {
					for pw := 0; pw <= 1; pw++ {
						if ph+pw == 1 {
							cph := ch - ph
							cwh := cw - pw
							if check(cph, cwh, h, w) {
								m[ch][cw] += m[cph][cwh]
							}
						}
					}
				}
			}
		}
	}

	fmt.Println(m[h][w])
}
