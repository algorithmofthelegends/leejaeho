#include <iostream>
#include <vector>
#include <cmath>

int main()
{
    int K;
    std::cin >> K;
    const int N = int(pow(2, K)) - 1;

    std::vector<int> buildings(N);
    for (int i = 0; i < N; i++)
        std::cin >> buildings[i];

    int idx = N;
    do
    {
        idx /= 2;
        int tIdx = idx;

        do
        {
            std::cout << buildings[tIdx] << " ";
        } while ((tIdx += int(pow(2, K))) < N);

        std::cout << std::endl;
    } while (--K);

    return 0;
}