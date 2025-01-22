#include <iostream>
#include <map>
#include <algorithm>
#include <vector>
using namespace std;

bool cmp(pair<string, int> &a, pair<string, int> &b) {
    if (a.second == b.second) {
        if (a.first.length() == b.first.length()) {
            return a.first < b.first;
        }
        return a.first.length() > b.first.length();
    }
    return a.second > b.second;
}

int main() {
    int N, M;
    cin >> N >> M;

    string w;
    map<string, int> m;
    while (N--) {
        cin >> w;
        if (w.length() >= M) {
            m[w]++;
        }
    }

    vector< pair<string, int> > vec(m.begin(), m.end());
    sort(vec.begin(), vec.end(), cmp);

    int len = vec.size();


    for (int i = 0; i < len; i++)
        cout << vec[i].first << "\n";

    return 0;
}