package main

import (
	"bufio"
	"fmt"
	"os"
)

var N, M uint32

func main() {
	r := bufio.NewReader(os.Stdin)
	fmt.Fscan(r, &N)
	fmt.Fscan(r, &M)

	var tmp string
	for i := 0; i < int(N); i++ {
		s, _ := r.ReadString('\n')
		tmp = s
	}

	fmt.Println(tmp)
}
