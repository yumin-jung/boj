#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    int N;
    cin >> N;

    int arr[2000001], front = 0, back = 0;
    for (int i = 0; i < N; i++) {
        string op;
        cin >> op;
        if (op == "push") {
            int num;
            cin >> num;
            arr[back] = num;
            back++;
        } else if (op == "pop") {
            if (front == back) {
                cout << -1 << "\n";
            } else {
                cout << arr[front] << "\n";
                arr[front] = 0;
                front++;
            }
        } else if (op == "size") {
            cout << back - front << "\n";
        } else if (op == "empty") {
            if (front == back) {
                cout << 1 << "\n";
            } else {
                cout << 0 << "\n";
            }
        } else if (op == "front") {
            if (front == back) {
                cout << -1 << "\n";
            } else {
                cout << arr[front] << "\n";
            }
        } else {
            if (front == back) {
                cout << -1 << "\n";
            } else {
                cout << arr[back - 1] << "\n";
            }
        }
    }

    return 0;
}