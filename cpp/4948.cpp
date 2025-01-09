#include <iostream>
using namespace std;

bool isPrime (int n) {
    if (n == 1) return false;
    if (n == 2) return true;

    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

int main() {
    int n;
    cin >> n;

    while (n != 0) {
        int cnt = 0;
        for (int i = n + 1; i <= 2 * n; i++) {
            if(isPrime(i)) cnt++;
        }
        cout << cnt << endl;
        cin >> n;
    }

    return 0;
}