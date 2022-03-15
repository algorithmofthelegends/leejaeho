#include <iostream>
#include <cstring>

std::string makePalindrome(std::string& s, int& digits) {
  std::string palindrome = std::string(digits, '1');

  int maxIdx = digits - 1;
  int midIdx = digits / 2;

  for(int i=0; i<midIdx; i++) {
    palindrome[i] = s[i];
    palindrome[maxIdx-i] = s[i];
  }

  // set mid string when odd
  if(digits%2 == 1) palindrome[midIdx] = s[midIdx];

  return palindrome;
}

void plus(std::string& s, int index, int& digits) {
  // return if new  digit should be created
  if(index < 0) {
    s = '1' + s;
    digits++;
    return;
  }

  char cur = s[index];

  if(cur == '9') {
    s[index] = '0';
    plus(s, index-1, digits);
  } else {
    s[index] = cur + 1;
  }

  return;
}

int main(){
  std::string s, curS;
  std::getline(std::cin, s);
  int digits = s.size();

  // initiate first string
  curS = digits % 2 == 0 ? s.substr(0, (digits/2)) : s.substr(0, (digits/2) + 1);

  std::string result = makePalindrome(curS, digits);
  // if first palindrome is answer printout
  if(s < result){
    std::cout << result;
  } else {
    // if not plus 1 and find next palindrome
    plus(curS, curS.size()-1, digits);
    std::cout << makePalindrome(curS, digits);
  }

  return 0;
}