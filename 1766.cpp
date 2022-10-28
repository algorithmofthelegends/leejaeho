/**
 *
4 2
4 2
3 1
 *
 */
#include <iostream>
#include <vector>
#include <queue>

int main()
{
  int N, M;
  std::cin >> N >> M;
  std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
  std::vector<int> indegree(N + 1, 0);
  std::vector<std::vector<int>> graph(N + 1, std::vector<int>());

  for (int i = 0; i < M; i++)
  {
    int f, t;
    std::cin >> f >> t;

    graph[f].push_back(t);
    ++indegree[t];
  }

  for (int i = 1; i <= N; i++)
    if (indegree[i] == 0)
      pq.push(i);

  while (!pq.empty())
  {
    int node = pq.top();
    pq.pop();

    std::cout << node;

    for (auto next : graph[node])
    {
      if (--indegree[next] == 0)
        pq.push(next);
    }

    if (!pq.empty())
      std::cout << " ";
  }

  return 0;
}