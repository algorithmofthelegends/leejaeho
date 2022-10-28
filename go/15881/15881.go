/*
15
ApPApPpAPpApPAp
*/

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	var N int
	r := bufio.NewReader(os.Stdin)
	fmt.Fscan(r, &N)
	s, _ := r.ReadString('\n')
	s = strings.TrimSpace(s)

	// for read flushing
	if len(s) == 0 {
		s, _ = r.ReadString('\n')
		s = strings.TrimSpace(s)
	}

	var count int
	for i := 0; i < N-3; {
		if s[i:i+4] == "pPAp" {
			count++
			i = i + 4
		} else {
			i++
		}
	}

	fmt.Println(count)
}
