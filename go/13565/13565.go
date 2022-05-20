/*
5 6
010101
010101
010000
011101
100011
001011
*/

package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

var N, M int
var result bool

func dfs(starty int, startx int, board *[]bool, footprint *[]bool) {
	// check
	(*footprint)[starty*M+startx] = true

	// check result
	if starty == N-1 || result {
		result = true
		return
	}

	// move
	for x := -1; x <= 1; x++ {
		for y := -1; y <= 1; y++ {
			dx := startx + x
			dy := starty + y
			if math.Abs(float64(x)+float64(y)) == 1 && dx < M && dx >= 0 && dy >= 0 && dy < N {
				if !(*board)[dy*M+dx] && !(*footprint)[dy*M+dx] {
					dfs(dy, dx, board, footprint)
				}
			}
		}
	}

	return
}

func main() {
	r := bufio.NewReader(os.Stdin)
	fmt.Fscan(r, &N)
	fmt.Fscan(r, &M)

	result = false
	board := make([]bool, 0, N*M)

	// for flushing
	for i := 0; i < int(N); i++ {
		tmp, _ := r.ReadString('\n')
		tmp = strings.TrimSpace(tmp)

		// for read flushing
		if len(tmp) == 0 {
			tmp, _ = r.ReadString('\n')
			tmp = strings.TrimSpace(tmp)
		}

		for _, c := range tmp {
			if c == '1' {
				board = append(board, true)
			} else {
				board = append(board, false)
			}
		}
	}

	for i := 0; i < M; i++ {
		footprint := make([]bool, N*M)

		if !board[i] {
			dfs(0, i, &board, &footprint)
		}
	}

	if result {
		fmt.Println("YES")
	} else {
		fmt.Println("NO")
	}
}
