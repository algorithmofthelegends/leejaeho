/**
 *
mirkovC4nizCC44
C4
 *
 */
#include <iostream>
#include <string>

using namespace std;
int main()
{
  string s, c;

  getline(cin, s);
  getline(cin, c);

  int cSize = c.size();

  while (true)
  {
    int n = s.size();
    size_t startIdx = s.find(c);
    if (startIdx == string::npos)
      break;

    string t = string(s.begin(), s.begin() + startIdx);

    int nextIdx = startIdx + cSize;
    if (nextIdx < n)
    {
      t += string(s.begin() + nextIdx, s.end());
    }

    s = t;
  }

  cout << (s.size() == 0 ? "FRULA" : s);
  return 0;
}