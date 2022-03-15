#include <iostream>
#include <cstring>

bool check(std::string& s) {
  int midIdx = s.size() / 2;

  for(int i=0; i<midIdx; i++) if(s[i] != s[s.size()-1-i]) return false;
  return true;
}

void plus(std::string& s, int index) {
  // return if new  digit should be created
  if(index < 0) {
    s = '1' + s;
    return;
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

    if(check(s)) {
      std::cout << s;
      break;
    }
  }

  return 0;
}