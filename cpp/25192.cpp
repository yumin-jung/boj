#include <iostream>
#include <set>
using namespace std;

int main() {
    int N;
    cin >> N;

    set<string> s;
    string op;
    int res = 0;
    for (int i = 0; i < N; i++) {
        cin >> op;
        if (op == "ENTER") {
            res += s.size();
            s.clear();
        } else {
            s.insert(op);
        }
    }

    res += s.size();

    cout << res << "\n";

    return 0;
}