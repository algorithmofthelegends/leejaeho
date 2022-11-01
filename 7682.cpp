/**
 * @file 7682.cpp
 * @author your name (you@domain.com)
 * @brief
 * @version 0.1
 * @date 2022-11-01
 *
 *
XXXOOO...
OX.XO...O
XXXOOOXXO
end
 * @copyright Copyright (c) 2022
 *
 */
#include <iostream>
#include <string>
#include <vector>

int main()
{
  std::string temp;

  while (true)
  {
    std::getline(std::cin, temp);
    if (temp == "end")
      break;

    std::vector<int> map;
    int white = 0, black = 0, wresult = 0, bresult = 0;

    // white == O == 1
    // black == X == 0
    // . == . == -1
    for (auto c : temp)
    {
      switch (c)
      {
      case 'O':
        map.push_back(1);
        white++;
        break;
      case 'X':
        map.push_back(0);
        black++;
        break;
      case '.':
        map.push_back(-1);
        break;
      }
    }

    for (int i = 0; i < 3; i++)
    {
      int check = 0;
      // 1. check row
      for (int j = i * 3; j < (i * 3) + 3; j++)
      {
        if (map[j] == -1)
        {
          check = -1;
          break;
        }
        else
        {
          check += map[j];
        }
      }
      if (check == 0)
        ++bresult;
      else if (check == 3)
        ++wresult;

      // 2. check column
      check = 0;
      for (int j = i; j < 9; j += 3)
      {
        if (map[j] == -1)
        {
          check = -1;
          break;
        }
        else
        {
          check += map[j];
        }
      }
      if (check == 0)
        ++bresult;
      else if (check == 3)
        ++wresult;

      // 3. check cross
      if ((i == 1) || (i == 2))
        continue;

      check = 0;
      for (int j = i; j < 9; j += 4)
      {
        if (map[j] == -1)
        {
          check = -1;
          break;
        }
        else
        {
          check += map[j];
        }
      }
      if (check == 0)
        ++bresult;
      else if (check == 3)
        ++wresult;
    }

    // check map is filled
    if (white + black == 9)
    {
      if (((white + 1) == black) && ((bresult + wresult) <= 1))
        /**
         * @example
         * XOXOXOXOX
         */
        std::cout << "valid" << std::endl;
      else
        /**
         * @example
         * OXOXOXOXO
         * XXXOOOXXO
         */
        std::cout << "invalid" << std::endl;

      continue;
    }
    else
    {
      // map is not filled
      // if finish line is one
      if ((bresult + wresult) == 1)
      {
        // if stone isn't balance it's invalid
        if ((wresult && (white == black)) || (bresult && ((white + 1) == black)))
          /**
           * @example
           * .XXX.XOOO
           * XO.OX...X
           */
          std::cout << "valid" << std::endl;
        else
          /**
           * @example
           * OX.XO...O
           */
          std::cout << "invalid" << std::endl;
      }
      // if finish line more than one it's not valid
      else
      {
        /**
         * @example
         * X.OO..X..
         * XXXOOO...
         */
        std::cout << "invalid" << std::endl;
      }
    }
  }

  return 0;
}