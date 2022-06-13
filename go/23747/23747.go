/*
4 5
aaabc
dcbbc
dccaa
ddaaa
3 4
WLLLWUURRD
*/
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func dfs(hr int, hc int, board *[]string, ward *[][]bool, R *int, C *int) {
	(*ward)[hr][hc] = true

	for i := -1; i <= 1; i++ {
		for j := -1; j <= 1; j++ {
			if i+j == -1 || i+j == 1 {
				nr := hr + i
				nc := hc + j
				if nr >= 0 && nr < *R && nc >= 0 && nc < *C {
					if !(*ward)[nr][nc] && (*board)[nr][nc] == (*board)[hr][hc] {
						dfs(nr, nc, board, ward, R, C)
					}
				}
			}
		}
	}

	return
}

func markCurrent(hr int, hc int, ward *[][]bool, R *int, C *int) {
	(*ward)[hr][hc] = true

	for i := -1; i <= 1; i++ {
		for j := -1; j <= 1; j++ {
			if i+j == -1 || i+j == 1 {
				nr := hr + i
				nc := hc + j
				if nr >= 0 && nr < *R && nc >= 0 && nc < *C {
					(*ward)[nr][nc] = true
				}
			}
		}
	}

	return
}

func main() {
	var R, C int
	r := bufio.NewReader(os.Stdin)
	fmt.Fscan(r, &R)
	fmt.Fscan(r, &C)

	board := make([]string, 0)

	for i := 0; i < R; i++ {
		tmp, _ := r.ReadString('\n')
		tmp = strings.TrimSpace(tmp)
		// for read flushing
		if len(tmp) == 0 {
			tmp, _ = r.ReadString('\n')
			tmp = strings.TrimSpace(tmp)
		}

		board = append(board, tmp)
	}

	var hr, hc int
	fmt.Fscan(r, &hr)
	fmt.Fscan(r, &hc)
	tmp, _ := r.ReadString('\n')
	tmp = strings.TrimSpace(tmp)
	// for read flushing
	if len(tmp) == 0 {
		tmp, _ = r.ReadString('\n')
		tmp = strings.TrimSpace(tmp)
	}

	footprint := tmp
	ward := make([][]bool, R)
	for i := range ward {
		ward[i] = make([]bool, C)
	}

	hr -= 1
	hc -= 1
	for i := range footprint {
		if footprint[i] == 'U' {
			hr -= 1
		} else if footprint[i] == 'L' {
			hc -= 1
		} else if footprint[i] == 'R' {
			hc += 1
		} else if footprint[i] == 'D' {
			hr += 1
		} else if footprint[i] == 'W' {
			ward[hr][hc] = true
			// check := make([][]bool, R)
			// for i := range check {
			// 	check[i] = make([]bool, C)
			// }

			dfs(hr, hc, &board, &ward, &R, &C)
		}
	}

	markCurrent(hr, hc, &ward, &R, &C)

	for i := range ward {
		tmp := make([]string, 0)
		for j := range ward[i] {
			if ward[i][j] {
				tmp = append(tmp, ".")
			} else {
				tmp = append(tmp, "#")
			}
		}
		fmt.Println(strings.Join(tmp, ""))
	}
}
