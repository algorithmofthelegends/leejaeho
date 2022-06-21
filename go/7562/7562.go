/*
3
8
0 0
7 0
100
0 0
30 50
4
0 0
2 1
*/
package main

import "fmt"

type Node struct {
	x     int
	y     int
	count int
}

func bfs(start Node, dest Node, check *[][]bool, I int) int {
	q := make([]Node, 0)
	q = append(q, start)
	(*check)[start.x][start.y] = true

	for len(q) != 0 {
		node := q[0]
		q = q[1:len(q)]

		for x := -2; x <= 2; x++ {
			for y := -2; y <= 2; y++ {
				sum := x + y
				if x != 0 && y != 0 && (sum == 3 || sum == -3 || sum == 1 || sum == -1) {
					nx := node.x + x
					ny := node.y + y

					if nx >= 0 && nx < I && ny >= 0 && ny < I && !(*check)[nx][ny] {
						if nx == dest.x && ny == dest.y {
							return node.count + 1
						}

						q = append(q, Node{nx, ny, node.count + 1})
						(*check)[nx][ny] = true
					}
				}
			}
		}
	}

	return 0
}

func main() {
	var T int
	fmt.Scan(&T)

	for i := 0; i < T; i++ {
		var I int
		fmt.Scan(&I)

		var x, y int
		var start, dest Node
		fmt.Scanf("%d %d", &x, &y)
		start.x = x
		start.y = y
		start.count = 0
		fmt.Scanf("%d %d", &x, &y)
		dest.x = x
		dest.y = y
		start.count = 0

		check := make([][]bool, I)
		for i := range check {
			check[i] = make([]bool, I)
		}

		fmt.Println(bfs(start, dest, &check, I))
	}
}
