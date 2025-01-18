#include <iostream>
#include <deque>
using namespace std;

int N;
int isStack[100001];

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);
    cin >> N;

    for (int i = 0; i < N; i++) {
        cin >> isStack[i];
    }

    deque<int> deque;
    for (int i = 0; i < N; i++) {
        int b;
        cin >> b;
        if (!isStack[i]) {
            deque.push_back(b);
        }
    }

    int M;
    cin >> M;
    for (int i = 0; i < M; i++) {
        int c;
        cin >> c;
        deque.push_front(c);
        cout << deque.back() << " ";
        deque.pop_back();
    }

    return 0;
}