/*
24
0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 1
2
1 3
2 3
*/
package main

import "fmt"

func main() {
	var N int
	fmt.Scan(&N)

	switches := make([]bool, N+1)

	for i := 1; i <= N; i++ {
		fmt.Scan(&switches[i])
	}

	var T int
	fmt.Scan(&T)

	for i := 0; i < T; i++ {
		var s, n int
		fmt.Scanf("%d %d", &s, &n)

		if s == 1 {
			sum := n
			for n <= N {
				if switches[n] {
					switches[n] = false
				} else {
					switches[n] = true
				}

				n += sum
			}
		} else {
			sub := 0
			for n-sub > 0 && n+sub <= N && switches[n-sub] == switches[n+sub] {
				if switches[n-sub] {
					switches[n-sub] = false
				} else {
					switches[n-sub] = true
				}

				if sub != 0 {
					if switches[n+sub] {
						switches[n+sub] = false
					} else {
						switches[n+sub] = true
					}
				}

				sub++
			}
		}
	}

	for i, v := range switches {
		if i == 0 {
			continue
		}

		var result int
		if v {
			result = 1
		} else {
			result = 0
		}

		if i%20 == 0 {
			fmt.Println(result)
		} else {
			fmt.Print(result)
			if i != len(switches)-1 {
				fmt.Print(" ")
			}
		}
	}
}
