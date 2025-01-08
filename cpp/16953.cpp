#include <iostream>
using namespace std;

int main() {
    int A, B;
    cin >> A >> B;

    int res = 1;

    while (A != B) {
        if (A > B) {
            res = -1;
            break;
        }

        if (B % 2 == 0) {
            B /= 2;
        } else if (B % 10 == 1) {
            B /= 10;
        } else {
            res = -1;
            break;
        }

        res++;
    }

    cout << res << endl;
    return 0;
}