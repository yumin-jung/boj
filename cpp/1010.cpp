#include <iostream>
using namespace std;

int main() {
    int T;
    cin >> T;

    int N, M;
    for (int i = 0; i < T; i++) {
        cin >> N >> M;
        long long res = 1;
        int n = 1;
        for (int i = M; i > M - N; i--) {
            res = res * i / n;
            n++;
        }
        cout << res << "\n";
    }

    return 0;
}