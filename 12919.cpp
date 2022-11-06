#include <iostream>
#include <string>
#include <algorithm>

int find(const std::string &S, const std::string &T)
{
  if (S == T)
    return 1;
  if (S.size() >= T.size())
    return 0;

  int ans = 0;

  if (T[0] == 'B')
  {
    std::string t(T.begin() + 1, T.end());
    std::reverse(t.begin(), t.end());
    ans += find(S, t);
  }

  if (T[T.size() - 1] == 'A')
  {
    ans += find(S, std::string(T.begin(), T.end() - 1));
  }

  return ans;
}

int main()
{
  std::string S, T;
  std::getline(std::cin, S);
  std::getline(std::cin, T);

  std::cout << find(S, T);

  return 0;
}