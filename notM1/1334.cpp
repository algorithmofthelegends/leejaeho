#include <iostream>
#include <cstring>

bool check(std::string& s) {
  int midIdx = s.size() / 2;
  return true;
}

void plus(std::string& s, int index) {
  // return if new  digit should be created
  if(index < 0) {
    s = '1' + s;
  }

  char cur = s[index];

  if(cur == '9') {
    s[index] = '0';
    plus(s, index-1);
  } else {
    s[index] = cur + 1;
  }

  return;
}

int main(){
  std::string s;
  std::getline(std::cin, s);

  while(true){
    plus(s, s.size()-1);
    check(s);
  }

  return 0;
}