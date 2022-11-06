#include <iostream>

int main()
{
  int N, K;
  std::cin >> N >> K;
  long long l = 1, r = (long long)N * (long long)N, m, ans;

  while (l <= r)
  {
    m = (l + r) / 2;
    long long cnt = 0;
    for (long long i = 1; i <= N; i++)
      cnt += std::min<long long>((m / i), N);

    if (cnt < K)
      l = m + 1;
    else
      ans = m, r = m - 1;
  }

  std::cout << ans;
  return 0;
}