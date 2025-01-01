#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int A, B;
    cin >> A >> B;

    while (A != 0 && B != 0) {
        if (B % A == 0) {
            cout << "factor" << endl;
        } else if (A % B == 0) {
            cout << "multiple" << endl;
        } else {
            cout << "neither" << endl;
        }

        cin >> A >> B;
    }

    return 0;
}