#include <iostream>
#include <vector>

void init(int &start, int &end)
{
    start = -1;
    end = -1;
    return;
}

int main()
{
    int N;
    std::cin >> N;
    std::vector<int> inputs(N);
    for (int i = 0; i < N; i++)
        std::cin >> inputs[i];

    const int BOUNCE = 2;
    int result = 0;

    for (int i = 1; i <= 8; i++)
    {
        int start = -1;
        int end = -1;

        for (int j = 0; j < N; j++)
        {
            const int t = inputs[j];

            // if value is what's  looking for  record
            if (t >= i && t <= i + BOUNCE)
            {
                if (start >= 0)
                    end = j;
                else
                    start = j;
            }
            else
            {

                // if value isn't what's looking for compare result
                if (end >= 0)
                    result = std::max(end - start, result);

                init(start, end);
            }
        }

        // if end inner for loop compare result and reset init values
        if (end >= 0)
            result = std::max(end - start, result);
        init(start, end);
    }

    std::cout << result + 1;
}