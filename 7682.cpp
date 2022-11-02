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
    std::string answer;
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
      if (i == 1)
        continue;

      check = 0;
      for (int j = i; j < 9 - i; j += (4 - i))
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
      if ((white + 1) == black)
      {
        /**
         * @example
         * XOXOXOXOX
         */
        if (!wresult)
          answer = "valid";
        else
          answer = "invalid";
      }
      /**
       * @example
       * OXOXOXOXO
       * XXXOOOXXO
       */
      else
        answer = "invalid";
    }
    else
    {
      // map is not filled
      // if finish line is more than one
      if ((bresult && wresult == 0) || (bresult == 0 && wresult))
      {
        // if stone isn't balance it's invalid
        if ((wresult && (white == black)) || (bresult && ((white + 1) == black)))
          /**
           * @example
           * .XXX.XOOO
           * XO.OX...X
           */
          answer = "valid";
        else
          /**
           * @example
           * OX.XO...O
           */
          answer = "invalid";
      }
      else
      {
        /**
         * @example
         * X.OO..X..
         * XXXOOO...
         */
        answer = "invalid";
      }
    }
    std::cout << answer << std::endl;
  }

  return 0;
}