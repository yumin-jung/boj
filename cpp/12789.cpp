#include <iostream>
#include <stack>
using namespace std;

int main() {
    int N;
    cin >> N;

    int num;
    int cnt = 1;
    stack<int> space;
    for (int i = 0; i < N; i++) {
        cin >> num;
        if (num == cnt) {
            cnt++;
        } else {
            space.push(num);
        }

        while (!space.empty() && space.top() == cnt) {
            space.pop();
            cnt++;
        }
    }

    if (space.empty()) {
        cout << "Nice\n";
    } else {
        cout << "Sad\n";
    }

    return 0;
}