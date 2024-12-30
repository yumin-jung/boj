#include <iostream>
using namespace std;

int main() {
    int N, v, res = 0;
    
    cin >> N;

    int numbers[N];
    
    for (int i = 0; i < N; i++) {
        cin >> numbers[i];
    }

    cin >> v;

    for (int i = 0; i < N; i++) {
        if (numbers[i] == v) {
            res++;
        }
    }

    cout << res << endl;

    return 0;
}