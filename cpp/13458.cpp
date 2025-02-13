#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    int N;
    cin >> N;

    vector <int> v(N);

    for (int i = 0; i < N; i++) {
        cin >> v[i];
    }

    int B, C;
    cin >> B >> C;

    long long res = N;
    for (int i = 0; i < N; i++) {
        v[i] -= B;
        if (v[i] <= 0) {
            continue;
        }
        res += v[i] / C;
        if (v[i] % C > 0) {
            res += 1;
        }
    }

    cout << res;

    return 0;
}