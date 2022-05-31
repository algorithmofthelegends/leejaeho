package main

import (
	"fmt"
	"strconv"
	"strings"
)

/*
1차 permutation
첫번째 문제 , 모든 케이스를 찾을 수 없음
두번째 문제 , 모든 케이스를 찾도록 자료구조 활용하면 시간초과
*/

// func prevPermutation(l *[]int) *[]int {
// 	i := len(*l) - 2
// 	if i < 0 {
// 		return nil
// 	}

// 	firstAsending := -1
// 	for ; i >= 0; i-- {
// 		if (*l)[i] > (*l)[i+1] {
// 			firstAsending = i
// 			break
// 		}
// 	}

// 	if firstAsending == -1 {
// 		return nil
// 	}

// 	j := len(*l) - 1
// 	for ; j > firstAsending; j-- {
// 		if (*l)[firstAsending] > (*l)[j] {
// 			swap(firstAsending, j, l)
// 			reverse(firstAsending+1, l)

// 			return l
// 		}
// 	}

// 	return nil
// }

// func swap(a int, b int, l *[]int) {
// 	(*l)[a] = (*l)[a] ^ (*l)[b]
// 	(*l)[b] = (*l)[a] ^ (*l)[b]
// 	(*l)[a] = (*l)[a] ^ (*l)[b]
// }

// func reverse(start int, l *[]int) {
// 	end := len(*l) - 1
// 	i := ((end - start) + 1) / 2
// 	for ; i > 0; i-- {
// 		swap(start, end, l)
// 		start++
// 		end--
// 	}
// }

// func main() {
// 	var N, M int
// 	fmt.Scanf("%d %d", &N, &M)

// 	permList := make([]int, N)
// 	for i := range permList {
// 		if i <= (M - 1) {
// 			permList[i] = (M - i)
// 		} else {
// 			permList[i] = 0
// 		}
// 	}

// 	result := &permList
// 	tmp := make([][]int, 0)
// 	for result != nil {
// 		nums := make([]int, M)
// 		for i, v := range *result {
// 			if v > 0 {
// 				nums[v-1] = i + 1
// 			}
// 		}

// 		tmp = append(tmp, nums)

// 		result = prevPermutation(result)
// 	}

// 	sort.Slice(tmp[:], func(i, j int) bool {
// 		for x := range tmp[i] {
// 			if tmp[i][x] == tmp[j][x] {
// 				continue
// 			}
// 			return tmp[i][x] < tmp[j][x]
// 		}

// 		return false
// 	})

// 	for i := range tmp {
// 		for j := range tmp[i] {
// 			if j == len(tmp[i])-1 {
// 				fmt.Println(tmp[i][j])
// 			} else {
// 				fmt.Print(tmp[i][j])
// 				fmt.Print(" ")
// 			}
// 		}
// 	}
// }

/*
2차 DFS
시간초과
*/
// func dfs(l *[]byte, parents *[]byte, footprint *[]bool, M byte) {
// 	if len(*parents) == int(M) {
// 		for i, v := range *parents {
// 			fmt.Print(v)
// 			if i == len(*parents)-1 {
// 				fmt.Println("")
// 			} else {
// 				fmt.Print(" ")
// 			}
// 		}

// 		return
// 	}

// 	for i, v := range *l {
// 		if !(*footprint)[i] {
// 			(*footprint)[i] = true
// 			tmp := append(*parents, v)
// 			dfs(l, &tmp, footprint, M)
// 			(*footprint)[i] = false
// 		}
// 	}

// 	return
// }

// func main() {
// 	var N, M byte
// 	fmt.Scanf("%d %d", &N, &M)

// 	nums := make([]byte, N)

// 	for i := range nums {
// 		nums[i] = byte(i + 1)
// 	}

// 	for i, v := range nums {
// 		parents := make([]byte, 0)
// 		parents = append(parents, v)
// 		footprint := make([]bool, N)
// 		footprint[i] = true
// 		dfs(&nums, &parents, &footprint, M)
// 	}
// }

/*
3번째 저번주 골드문제처럼
*/
func main() {
	var N, M int
	fmt.Scanf("%d %d", &N, &M)
	result := make([][]string, M)

	for i := range result {
		if i == 0 {
			tmp := make([]string, N)
			for j := 0; j < N; j++ {
				tmp[j] = strconv.Itoa(j + 1)
			}

			result[i] = tmp
		} else {
			tmp := make([]string, 0)
			for j := 0; j < N; j++ {
				curChar := strconv.Itoa(j + 1)

				for k := range result[i-1] {
					pop := result[i-1][k]

					if !strings.Contains(pop, curChar) {
						tmp = append(tmp, curChar+pop)
					}
				}
			}

			result[i] = tmp
		}
	}

	for _, v := range result[M-1] {
		s := strings.Split(v, "")
		fmt.Println(strings.Join(s, " "))
	}
}
