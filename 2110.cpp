/**
 *
 *
5 3
1
2
8
4
9
 *
 */
#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>

using namespace std;
int main()
{
  int N, C;
  cin >> N >> C;
  vector<int> v(N, 0);
  for (int i = 0; i < N; i++)
    cin >> v[i];

  sort(v.begin(), v.end());

  int l = 0, m, r = 1000000000, answer = 0;

  while (l <= r)
  {
    m = (l + r) / 2;

    int sIdx = 0, curIdx = 0;
    for (int i = 1; i < C; i++)
    {
      int distance = 0;
      while (distance < m && curIdx < N)
      {
        distance = v[curIdx] - v[sIdx];
        curIdx++;
      }

      sIdx = curIdx - 1;
    }

    if (curIdx < N)
    {
      answer = m;
      l = m + 1;
    }
    else
    {
      r = m - 1;
    }
  }

  cout << answer;

  return 0;
}