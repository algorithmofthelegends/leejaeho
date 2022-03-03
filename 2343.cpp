#include <iostream>
#include <vector>

typedef long long ll;

bool check(const ll &mid, const std::vector<ll> &v, const int &M, const int &N)
{
    int m = 0;
    ll base = 0;
    for (int i = 0; i < N; i++)
    {
        ll temp = v[i] - base;
        if (temp > mid)
        {
            /**
             * @brief 
             * update base
             * mid가 23일경우
             * 1 3 6 10 15 21까지 통과 28에서 걸림
             * 1. base를 한 인덱스 전으로 설정해 21로 설정
             * 설정한 베이스로 28부터 다시 루프 돌기위해서 i를 한 인덱스 전으로 설정
             */

            if (i != 0)
            {
                base = v[i - 1];
                i = i - 1;
            }

            // update current blueray
            m++;

            // if fail to make blueray with given mid return false
            if (m == M && i != N - 1)
                return false;
        }
    }

    return true;
}

int main()
{
    int N, M;
    std::cin >> N >> M;
    std::vector<ll> aggreLessons;

    ll sum = 0;
    for (int i = 0; i < N; i++)
    {
        int temp;
        std::cin >> temp;
        sum += temp;

        // 1 3 6 10 15 21 28 36 45
        aggreLessons.push_back(sum);
    }

    /**
     * @brief 
     * binary search
     * N = 10^6 까지고 
     * 강의 하나의 최대 길이가 10^4 이기 때문에
     * 최악의 경우 10^10log(10^10) 이라서
     * 다른 방법이 생각나지 않아 한 번 구현해보았는데
     * 백준 문제를 통과했음 .. 아이러니
     * 
     * initiating
     * L=1 R=45
     */
    ll left, right, mid;
    left = aggreLessons[0];
    right = aggreLessons[aggreLessons.size() - 1];

    /**
     * @brief 
     * L=1 R=45 mid=23
     * L=1 R=22 mid=11
     * L=12 R=22 mid=17
     * L=12 R=16 mid=14
     * L=15 R=16 mid=15
     * L=16 R=16 mid=16
     * L=17 R=16 mid=16
     */
    while (left <= right)
    {
        mid = (left + right) / 2;

        // check를 통해서
        // 현재 mid값으로 블루레이를 나눌 수 있으면 R = mid-1
        // 없으면 L = mid+1
        if (check(mid, aggreLessons, M, N))
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }

    std::cout << left;

    return 0;
}