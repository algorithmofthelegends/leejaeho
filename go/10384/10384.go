/*
3
The quick brown fox jumps over a lazy dog.The quick brown fox jumps over a lazy dog.The quick brown fox jumps over a lazy dog.
The quick brown fox jumps over a laconic dog.
abcdefghijklmNOPQRSTUVWXYZ-zyxwvutsrqpon   2013/2014      MLKJIHGFEDCBA
*/

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	// fmt.Println(alpabet['a'])
	// // len(map)
	// fmt.Println(int(2*'A'+('z'-'A'-1)) * int('z'-'A') / 2)
	// fmt.Println('z' - 'A')
	// fmt.Println('A' - 'A')
	// fmt.Println('a' - 'Z')
	// fmt.Println('Z' - 'A')
	// fmt.Println('z' - 'a')
	// fmt.Println('A')
	// fmt.Println('a')
	// fmt.Println('a' - ('a' - 'A'))
	var T int
	fmt.Scan(&T)

	scanner := bufio.NewScanner(os.Stdin)

	for i := 0; i < T; i++ {
		scanner.Scan()
		s := scanner.Text()
		alpabet := make(map[rune]int)
		fmt.Print("Case " + strconv.Itoa(i+1) + ": ")

		for _, c := range s {
			if ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') {
				if 'a' <= c && c <= 'z' {
					alpabet[c-('a'-'A')]++
				} else {
					alpabet[c]++
				}
			}
		}

		if len(alpabet) == 26 {
			j := 3
			result := false
			for j > 0 && !result {
				result = true
				for i := range alpabet {
					if alpabet[i]-j < 0 {
						result = false
						break
					}
				}

				if result {
					switch j {
					case 1:
						{
							fmt.Println("Pangram!")
						}
					case 2:
						{
							fmt.Println("Double pangram!!")
						}
					case 3:
						{
							fmt.Println("Triple pangram!!!")
						}
					}
				}

				j--
			}
		} else {
			fmt.Println("Not a pangram")
		}
	}
}
