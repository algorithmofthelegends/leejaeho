#include <iostream>

int main(){

  unsigned int N, check=0;
  std::cin >> N;

  // 전설의 7중 포문
  for(int h=1; h<10; h++) {
    for(int w=1; w<10; w++) {
      for(int e=0; e<10; e++) {
        for(int l=0; l<10; l++) {
          for(int o=0; o<10; o++) {
            for(int r=0; r<10; r++) {
              for(int d=0; d<10; d++) {
                if(h == e || 
                  h == l || 
                  h == o || 
                  h == w || 
                  h == r || 
                  h == d || 
                  e == l || 
                  e == o || 
                  e == w || 
                  e == r || 
                  e == d || 
                  l == o || 
                  l == w || 
                  l == r || 
                  l == d || 
                  o == w || 
                  o == r || 
                  o == d || 
                  w == r || 
                  w == d || 
                  r == d) continue;

                unsigned int hello = (h*10000 + e*1000 + l*100 + l*10 + o);
                unsigned int world = (w*10000 + o*1000 + r*100 + l*10 + d);
                unsigned int result = hello+world;
                if(result == N) {
                  check=1;
                  std::cout << "  " << hello << std::endl << "+ " << world << std::endl << "-------" << std::endl << result;
                  return 0;
                }
              }
            }
          }
        }
      }
    }
  }

  if(!check) std::cout << "No Answer";

  return 0;
}