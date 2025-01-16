#include <iostream>
#include <deque>
#include <utility>
using namespace std;

int main() {
    int N;
    cin >> N;

    int num;
    deque< pair<int,int> > deque;
    for (int i = 0; i < N; i++) {
        cin >> num;
        deque.push_back(make_pair(num, i + 1));
    }

    while (N--) {
        cout << deque.front().second << " ";
        num = deque.front().first;
        deque.pop_front();
        if (num > 0) {
            for (int i = 0; i < num - 1; i++) {
                deque.push_back(deque.front());
                deque.pop_front();
            }
        } else {
            for (int i = num; i < 0; i++) {
                deque.push_front(deque.back());
                deque.pop_back();
            }
        }
    }

    return 0;
}