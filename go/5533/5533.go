/*
3
89 92 77
89 92 63
89 63 77
*/
package main

import "fmt"

func main() {
	var N int
	fmt.Scanf("%d", &N)

	list := make([][]uint32, N)

	for i := range list {
		list[i] = make([]uint32, 3)
		for idx := range list[i] {
			fmt.Scanf("%d", &list[i][idx])
		}
	}

	result := make([]uint32, N)

	for i := 0; i < 3; i++ {
		for cur := range list {
			flag := 0
			for others := range list {
				if cur == others {
					continue
				}

				if list[cur][i] == list[others][i] {
					flag = 1
				}
			}

			if flag == 0 {
				result[cur] += list[cur][i]
			}
		}
	}

	for _, v := range result {
		fmt.Println(v)
	}
}
