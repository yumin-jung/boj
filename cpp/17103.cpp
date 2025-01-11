#include <iostream>
using namespace std;

bool arr[1000001] = {false, false};

int main() {
    for (int i = 2; i <= 1000000; i++) {
        arr[i] = true;
    }

    for (int i = 2; i * i <= 1000000; i++) {
        if (arr[i] == 0) {
            continue;
        }
        for (int j = i * i; j <= 1000000; j += i) {
            arr[j] = false;
        }
    }

    int T;
    cin >> T;

    int N;
    for (int i = 0; i < T; i++) {
        cin >> N;

        int k;
        if (N % 2 == 0) {
            k = N / 2;
        } else {
            k = (N - 1) / 2;
        }

        int cnt = 0;
        for (int i = 2; i <= k; i++) {
            if (arr[i] && arr[N - i]) {
                cnt++;
            }
        }
        cout << cnt << endl;
    }

    return 0;
}