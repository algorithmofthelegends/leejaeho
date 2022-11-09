/**
 *
 *
 *
7 2
-37 2 -6 -39 -29 11 -28
 */

#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
  int n, m;
  std::cin >> n >> m;
  std::vector<int> v(n, 0);
  for (int i = 0; i < n; i++)
  {
    std::cin >> v[i];
  }

  v.push_back(0);

  // sort
  std::sort(v.begin(), v.end());

  // find zero index
  auto it = std::find(v.begin(), v.end(), 0);
  int base = it - v.begin();

  int answer = 0;
  // positive
  for (int i = n; i > base; i -= m)
    answer += v[i] * 2;
  // negative
  for (int i = 0; i < base; i += m)
    answer += abs(v[i]) * 2;

  answer -= std::max(std::abs(v[0]), v[n]);
  std::cout << answer;

  return 0;
}