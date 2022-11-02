/**
 *
4 5
50 45 37 32 30
35 50 40 20 25
30 30 25 17 28
27 24 22 15 10
 *
 */
#include <iostream>
#include <vector>

typedef std::vector<std::vector<int>> vvi;

int move(const int x, const int y, vvi &map, vvi &memo, const int &M, const int &N)
{
  if (x == N - 1 && y == M - 1)
    return 1;
  // memoization
  if (memo[y][x] != -1)
    return memo[y][x];

  memo[y][x] = 0;

  for (int i = -1; i <= 1; i++)
  {
    for (int j = -1; j <= 1; j++)
    {
      if ((abs(i + j) == 1))
      {
        int ny = y + i;
        int nx = x + j;

        if (nx >= 0 && ny >= 0 && nx < N && ny < M)
          if (map[ny][nx] < map[y][x])
            memo[y][x] += move(nx, ny, map, memo, M, N);
      }
    }
  }

  return memo[y][x];
}

int main()
{
  int M, N;
  std::cin >> M >> N;

  vvi map;
  vvi memo(M, std::vector<int>(N, -1));
  for (int i = 0; i < M; i++)
  {
    std::vector<int> t(N, 0);
    for (int j = 0; j < N; j++)
      std::cin >> t[j];

    map.push_back(t);
  }

  std::cout << move(0, 0, map, memo, M, N) << std::endl;

  return 0;
}