#include <iostream>
#include <deque>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    int N;
    cin >> N;

    deque<int> deque;
    int op, X;
    for (int i = 0; i < N; i++) {
        cin >> op;
        switch (op) {
            case 1:
                cin >> X;
                deque.push_front(X);
                break;
            case 2:
                cin >> X;
                deque.push_back(X);
                break;
            case 3:
                if (deque.empty()) {
                    cout << "-1\n";
                } else {
                    cout << deque.front() << "\n";
                    deque.pop_front();
                }
                break;
            case 4:
                if (deque.empty()) {
                    cout << "-1\n";
                } else {
                    cout << deque.back() << "\n";
                    deque.pop_back();
                }
                break;
            case 5:
                cout << deque.size() << "\n";
                break;
            case 6:
                if (deque.empty()) {
                    cout << "1\n";
                } else {
                    cout << "0\n";
                }
                break;
            case 7:
                if (deque.empty()) {
                    cout << "-1\n";
                } else {
                    cout << deque.front() << "\n";
                }
                break;
            case 8:
                if (deque.empty()) {
                    cout << "-1\n";
                } else {
                    cout << deque.back() << "\n";
                }
                break;
        }
    }

    return 0;
}