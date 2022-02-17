#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    // input
    int N;
    std::cin >> N;
    std::vector<int> A(N), B(N);
    for (int i = 0; i < N; i++)
        std::cin >> A[i];
    for (int i = 0; i < N; i++)
        std::cin >> B[i];

    // sort
    std::sort(A.begin(), A.end());
    std::sort(B.begin(), B.end(), std::greater<int>());

    // calc
    int result = 0;
    for (int i = 0; i < N; i++)
        result += A[i] * B[i];

    // output
    std::cout << result;

    return 0;
}