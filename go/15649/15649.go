package main

import (
	"bytes"
	"fmt"
)

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

func main() {
	var N, M byte
	fmt.Scanf("%d %d", &N, &M)

	result := make([][]byte, 0)

	for i := range result {
		tmp := make([]byte, 0)
		for j := byte(1); j <= N; j++ {
			if i == 0 {
				tmp = append(tmp, j)
			} else {
				if bytes.Contains(result[i-1], []byte{j}) {
					tmp = append(tmp)

				}
			}
		}
		result = append(result, tmp)
	}
}
