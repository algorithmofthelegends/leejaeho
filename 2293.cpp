#include <iostream>
#include <vector>

int main()
{
  int n, m;
  std::cin >> n >> m;
  std::vector<int> coins(n, 0);
  std::vector<int> dp(m + 1, 0);

  for (int i = 0; i < n; i++)
    std::cin >> coins[i];

  dp[0] = 1;
  for (int i = 0; i < n; i++)
    for (int j = coins[i]; j <= m; j++)
      if (dp[j - coins[i]])
        dp[j] += dp[j - coins[i]];

  std::cout << dp[m];
}