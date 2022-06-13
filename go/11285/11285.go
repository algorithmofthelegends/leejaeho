/*
ㄷ
ㅐ
ㄹ
*/
package main

import (
	"fmt"
)

func main() {
	slist := make([]string, 3)
	fmt.Scanln(&slist[0])
	fmt.Scanln(&slist[1])
	fmt.Scanln(&slist[2])

	bashCharacters := [3][]string{{
		"ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
	}, {
		"ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ",
	}, {
		"ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
	}}

	result := 0
	for i := 0; i < 3; i++ {
		for j := range bashCharacters[i] {
			if bashCharacters[i][j] == slist[i] {
				if i == 0 {
					result += 21 * 28 * j
				} else if i == 1 {
					result += 28 * j
				} else {
					result += j + 1
				}
			}
		}
	}

	fmt.Println(string('\uAC00' + result))
}
