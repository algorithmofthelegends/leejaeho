/**
 *
4 2 1
1 1 5 2 2
1 4 7 1 6
 *
 */
#include <iostream>
#include <vector>
#include <tuple>

using namespace std;

int main()
{
  int N, M, K;
  int m, s, d;
  cin >> N >> M >> K;

  vector<vector<tuple<int, int, int>>> map(N * N, vector<tuple<int, int, int>>());

  for (int i = 0; i < M; i++)
  {
    int r, c;
    cin >> r >> c >> m >> s >> d;
    map[(r - 1) * N + (c - 1)].push_back({m, s, d});
  }

  vector<pair<int, int>> direction{{-1, 0}, {-1, 1}, {0, 1}, {1, 1}, {1, 0}, {1, -1}, {0, -1}, {-1, -1}};
  while (K--)
  {
    vector<vector<tuple<int, int, int>>> t(N * N, vector<tuple<int, int, int>>());
    // move
    for (int i = 0; i < N * N; i++)
    {
      vector<tuple<int, int, int>> &v = map[i];
      while (v.size() != 0)
      {
        tuple<int, int, int> &e = v.back();
        v.pop_back();
        tie(m, s, d) = e;

        // go next
        int cur = i;
        auto &[r, c] = direction[d];

        // move row
        int nr = (cur / N) + (r * s);
        if (nr < 0)
          nr += (abs((nr + 1) / N) + 1) * N;
        else
          nr -= abs(nr / N) * N;

        // move col
        int nc = (cur % N) + (c * s);
        if (nc < 0)
          nc += (abs((nc + 1) / N) + 1) * N;
        else
          nc -= abs(nc / N) * N;

        int nextNode = nr * N + nc;

        t[nextNode].push_back({m, s, d});
      }
    }

    // divide fireball
    for (int i = 0; i < N * N; i++)
    {
      vector<tuple<int, int, int>> &v = t[i];
      if (v.size() < 2)
        continue;

      vector<tuple<int, int, int>> te;
      int nm = 0, ns = 0, prev_state = -1, flag = 1;
      for (auto e : v)
      {
        tie(m, s, d) = e;
        nm += m;
        ns += s;

        // next direction
        if (prev_state != -1 && prev_state != d % 2)
          flag = 0;
        prev_state = d % 2;
      }
      // next m, s
      nm = nm / 5;
      ns = ns / v.size();

      // if no mass delete fireball
      if (nm == 0)
      {
        t[i] = te;
        continue;
      }

      // four fireballs
      for (int j = flag ? 0 : 1; j < 8; j += 2)
      {
        te.push_back({nm, ns, j});
      }
      t[i] = te;
    }

    map = t;
  }

  // get answer
  int answer = 0;
  for (auto v : map)
  {
    for (auto e : v)
    {
      tie(m, s, d) = e;
      answer += m;
    }
  }

  std::cout << answer;

  return 0;
}