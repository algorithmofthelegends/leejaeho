/**
 * @file 17091.cpp
 * @author your name (you@domain.com)
 * @brief
 * @version 0.1
 * @date 2022-10-28
 *
 * @copyright Copyright (c) 2022
 *
 *
5
47
 *
 */

#include <iostream>
#include <vector>
#include <string>

int main()
{
  int h, m;
  std::cin >> h >> m;
  std::string prefix, result = "";
  std::vector<std::string> words = {"twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "half"};

  if (m == 0)
  {
    prefix = "o' clock";

    result = words[h] + " " + prefix;
  }
  else
  {
    if (m <= 30)
    {
      prefix = "past";
    }
    else
    {
      m = 60 - m;
      h = (h + 1) % 12;
      prefix = "to";
    }

    if (m >= 20 && m < 30)
    {
      result = words[20] + " ";
    }

    switch (m)
    {
    case 1:
      result = words[m] + " " + "minute" + " " + prefix + " " + words[h];
      break;
    case 15:
      result = words[m] + " " + prefix + " " + words[h];
      break;
    case 30:
      result = words[21] + " " + prefix + " " + words[h];
      break;
    default:
      result += ((m % 20 == 0) ? "" : words[(m % 20)] + " ") + "minutes" + " " + prefix + " " + words[h];
    }
  }

  std::cout << result;

  return 0;
}