// ababacababa
#include <iostream>
#include <string>
#include <vector>

void find(int n, std::vector<int> &a, std::string &s, const std::string &T)
{
  char cur_char = T[n];
  // get current pattern
  std::string cur_pattern = std::string(T.begin(), T.begin() + n + 1);

  // find a[n]
  std::string::const_iterator bIterator = T.begin();
  std::string::const_iterator eIterator = bIterator + cur_pattern.size();

  // if cannot find pattern return function
  if (eIterator > T.end())
    return;

  int an = 0;
  while (cur_pattern == std::string(bIterator, eIterator))
  {
    bIterator = eIterator;
    eIterator = bIterator + cur_pattern.size();
    an++;

    if (eIterator > T.end() || bIterator >= T.end())
      break;
  }
  a.push_back(an);
  s = s + cur_char;

  // si * ai + si-1 * ai+1
  int next = n * (an + 1) + an;
  find(next, a, s, T);
}

int main()
{
  std::string T;
  std::getline(std::cin, T);

  std::vector<int> a;
  std::string s("");

  find(0, a, s, T);

  std::cout << s << std::endl;
  for (auto &e : a)
    std::cout << e << " ";

  return 0;
}