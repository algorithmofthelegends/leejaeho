#include <iostream>
#include <algorithm>
#include <vector>

int main()
{
  int n;
  std::cin >> n;
  std::vector<int> l(n, 0);
  for (int i = 0; i < n; i++)
    std::cin >> l[i];

  std::vector<int> lis(n, 1);
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < i; j++)
    {
      if (l[i] > l[j])
        lis[i] = std::max(lis[i], lis[j] + 1);
    }
  }

  std::sort(lis.begin(), lis.end(), std::greater());

  std::cout << n - lis[0];
  return 0;
}