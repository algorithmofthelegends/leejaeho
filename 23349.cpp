#include <iostream>
#include <cstring>
#include <vector>
#include <map>
#include <algorithm>

typedef std::map<std::string, std::vector<int> > msvi;
typedef std::vector<std::pair<int, std::string> > vpis;

void input(const int &maxT, int &N, msvi &m)
{
    std::cin >> N;
    while (N--)
    {
        int start, end;
        std::string name, place;

        std::cin >> name;
        std::cin >> place;
        std::cin >> start;
        std::cin >> end;

        if (m.count(place) == 0)
        {
            std::vector<int> v(maxT, 0);
            m[place] = v;
        }

        std::vector<int> &refV = m[place];
        for (int i = start; i < end; i++)
            refV[i]++;
    }
}

void getRushhour(vpis &rushhour, const msvi &timetable)
{
    for (auto &[key, value] : timetable)
    {
        int max = -(*std::max_element(value.begin(), value.end()));
        rushhour.push_back({max, key});
    }

    std::sort(rushhour.begin(), rushhour.end());
}

std::tuple<std::string, int, int> getResult(const vpis &rushhour, msvi &timetable)
{
    std::string hotPlace = rushhour[0].second;
    std::vector<int> hotTimetable = timetable[hotPlace];

    auto start = std::max_element(hotTimetable.begin(), hotTimetable.end());
    auto end = start;

    for (auto it = start; it != hotTimetable.end(); ++it)
    {
        if (*start != *it)
        {
            break;
        }

        end = it;
    }

    return {hotPlace, std::distance(hotTimetable.begin(), start), std::distance(hotTimetable.begin(), end) + 1};
}

int main()
{
    const int maxT = 50001;
    int N;
    msvi timetable;
    vpis rushhour;

    // process
    input(maxT, N, timetable);
    getRushhour(rushhour, timetable);
    std::tuple<std::string, int, int> result = getResult(rushhour, timetable);

    std::cout << std::get<0>(result) << " " << std::get<1>(result) << " " << std::get<2>(result);

    return 0;
}