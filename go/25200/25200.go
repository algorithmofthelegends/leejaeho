/*
5 6
1 3
3 2
4 3
2 4
4 3
3 2
*/
package main

import "fmt"

type jNumber struct {
	value int
	next  *jNumber
}

func main() {
	var N, M int
	fmt.Scanf("%d %d", &N, &M)

	results := make([][]jNumber, N)

	for i := range results {
		tmp := make([]jNumber, 0)
		tmp = append(tmp, jNumber{value: i, next: nil})
		results[i] = tmp
	}

	for i := 0; i < M; i++ {
		var u, v int
		fmt.Scanf("%d %d", &u, &v)

		cu := u - 1
		cv := v - 1

		if results[cv][len(results[cv])-1].next != nil {
			results[cv] = append(results[cv], jNumber{value: cv, next: nil})
		}

		results[cu][len(results[cu])-1].next = &results[cv][len(results[cv])-1]
	}

	for i := range results {
		tmp := results[i][0]
		for tmp.next != nil {
			tmp = *(tmp.next)
		}

		fmt.Print(tmp.value + 1)

		if i == len(results)-1 {
			fmt.Print("\n")
		} else {
			fmt.Print(" ")
		}
	}
}
