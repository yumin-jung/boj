#include <iostream>
using namespace std;

void rec(int i, int j, int N) {
    if ((i / N) % 3 == 1 && (j / N) % 3 == 1)
        cout << ' ';
    else if (N / 3 == 0)
        cout << '*';
    else
        rec(i, j, N / 3);
}

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    int N;
    cin >> N;

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            rec(i, j, N);
        cout << '\n';
    }

    return 0;
}