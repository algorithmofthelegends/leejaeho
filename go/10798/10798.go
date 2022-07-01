/*
ABCDE
abcde
01234
FGHIJ
fghij
*/
package main

import "fmt"

func main() {
	board := make([]string, 5)
	for i := 0; i < 5; i++ {
		fmt.Scanf("%s", &board[i])
	}

	for i := 0; i < 15; i++ {
		for j := 0; j < 5; j++ {
			if i < len(board[j]) {
				fmt.Print(string(board[j][i]))
			}
		}
	}
}
