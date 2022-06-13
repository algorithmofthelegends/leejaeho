/*
4
1 2 3
2 3 2
2 4 4
*/
package main

import (
	"fmt"
)

func dfs(node int, count uint64, m *[][]uint64, check *[]bool, result *uint64, N int) {
	if *result < count {
		*result = count
	}

	for i := 1; i <= N; i++ {
		nCount := (*m)[node][i]
		if i != node && !(*check)[i] && nCount > 0 {
			(*check)[i] = true
			dfs(i, count+nCount, m, check, result, N)
			(*check)[i] = false
		}
	}

	return
}

func main() {
	var N int
	fmt.Scan(&N)

	m := make([][]uint64, N+1)
	for i := 0; i < N; i++ {
		m[i+1] = make([]uint64, N+1)
	}

	for i := 0; i < N-1; i++ {
		var u, v int
		var d uint64

		fmt.Scanf("%d %d %d", &u, &v, &d)
		m[u][v] = d
		m[v][u] = d
	}

	check := make([]bool, N+1)
	check[1] = true
	var result uint64
	result = 0

	dfs(1, 0, &m, &check, &result, N)
	fmt.Println(result)
}
