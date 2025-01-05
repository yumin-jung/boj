#include <iostream>
using namespace std;

long long A, B, C, X;

long long mul(long long b) {
    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return A % C;
    }

    X = mul(b / 2) % C;

    if (b % 2 == 0) {
        return X * X % C;
    } else {
        return X * X % C * A % C;
    }
}

int main() {
    cin >> A >> B >> C;
    cout << mul(B) << endl;

    return 0;
}