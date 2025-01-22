#include <iostream>
#include <set>
using namespace std;

int main() {
    int N;
    cin >> N;

    set<string> s;
    s.insert("ChongChong");

    string a, b;
    for (int i = 0; i < N; i++) {
        cin >> a >> b;
        if (s.count(a) > 0) {
            s.insert(b);
        } else if (s.count(b) > 0) {
            s.insert(a);
        }
    }

    cout << s.size() << "\n";

    return 0;
}