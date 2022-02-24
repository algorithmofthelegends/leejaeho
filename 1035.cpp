#include <iostream>
#include <string>
#include <vector>

typedef std::vector<std::vector<int> > vvi;
typedef std::vector<std::pair<int, int> > vpii;

int directions[4][4]{
    {0, 1}, {1, 0}, {-1, 0}, {0, -1}};

const int N = 5;

bool allowToMove(std::vector<std::vector<int> > &map, const int x, const int y, const std::pair<int, int> node)
{
    int nextX = node.first + x;
    int nextY = node.second + y;

    // 다음 목적지가 0일때만 이동
    if (nextX < N && nextX >= 0 && nextY < N && nextY >= 0)
        if (map[nextX][nextY] == 0)
            return true;

    return false;
}

void checkPath(std::vector<std::vector<int> > &map, const int x, const int y, const std::pair<int, int> node, int check)
{
    int nextX = node.first + x;
    int nextY = node.second + y;

    map[nextX][nextY] = check ? map[node.first][node.second] : 0;
    return;
}

// 별들이 연결되어있는지 체크하는 로직
bool checkConnected(std::vector<std::vector<int> > &map, std::vector<std::pair<int, int> > &stars)
{
    vvi checker(N, std::vector<int>(N, 0));
    std::pair<int, int> node = stars[0];

    checker[node.first][node.second] = 1;

    // dfs
    for (int i = 0; i < 4; i++)
    {
        int nextX = node.first + directions[i][0];
        int nextY = node.second + directions[i][1];

        if (nextX < N && nextX >= 0 && nextY < N && nextY >= 0)
            if (checker[nextX][nextY] == 0 &&)
    }
}

void move(std::vector<std::vector<int> > &map, std::vector<std::pair<int, int> > &stars, int count)
{
    checkConnected(map, stars);

    // move directions
    for (int i = 0; i < 4; i++)
    {
        const int x = directions[i][0];
        const int y = directions[i][1];

        for (int j = 0; j < stars.size(); j++)
        {
            std::pair<int, int> node = stars[j];
            if (allowToMove(map, x, y, node))
            {
                // check path
                checkPath(map, x, y, node, 1);
                move(map, stars, count++);

                // uncheck path
                checkPath(map, x, y, node, 0);
            }
        }
    }

    return;
}

int main()
{
    int star = 1;

    vvi map(N, std::vector<int>(N, 0));
    vpii stars;

    for (int i = 0; i < N; i++)
    {
        std::string temp;
        std::getline(std::cin, temp);

        for (int j = 0; j < N; j++)
        {
            if (temp[j] == '*')
            {
                map[i][j] = star++;
                std::pair<int, int> temp = std::make_pair(i, j);
                stars.push_back(temp);
            }
            else
            {
                map[i][j] = 0;
            }
        }
    }

    move(map);

    return 0;
}
