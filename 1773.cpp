/**
 *
4 1
1 1
3 1
2 3
4 3
1 4
 *
 */
#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

typedef long long ll;

int find(int node, std::vector<int> &nodes)
{
  if (nodes[node] == node)
    return node;
  else
    return find(nodes[node], nodes);
}

bool merge(const int u, const int v, std::vector<int> &nodes)
{
  int U = find(u, nodes);
  int V = find(v, nodes);

  if (U == V)
    return false;
  else
  {
    nodes[V] = U;
    return true;
  }
}

int main()
{
  int N, M;
  std::cin >> N >> M;
  std::vector<std::pair<ll, ll>> edges(1, {0, 0});
  std::vector<std::tuple<ll, int, int>> wedges;
  std::vector<int> nodes(N + 1);
  for (int i = 0; i <= N; i++)
    nodes[i] = i;

  int cnt = N - 1;
  int f, t;
  double ans = 0;

  for (int i = 0; i < N; i++)
  {
    ll X, Y;
    std::cin >> X >> Y;
    edges.push_back({X, Y});
  }

  for (int i = 1; i < N; i++)
  {
    for (int j = i + 1; j <= N; j++)
    {
      const auto &[x1, y1] = edges[i];
      const auto &[x2, y2] = edges[j];
      wedges.push_back({(x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2), i, j});
    }
  }

  for (int i = 0; i < M; i++)
  {
    std::cin >> f >> t;
    const auto &[x1, y1] = edges[f];
    const auto &[x2, y2] = edges[t];

    merge(f, t, nodes);
    --cnt;
  }

  std::sort(wedges.begin(), wedges.end());
  for (int i = 0; i <= wedges.size(); i++)
  {
    if (cnt == 0)
      break;

    const auto [d, f, t] = wedges[i];
    if (merge(f, t, nodes))
    {
      ans += std::sqrt(d);
      cnt--;
    }
  }

  std::cout << std::fixed;
  std::cout.precision(2);
  std::cout << ans;

  return 0;
}