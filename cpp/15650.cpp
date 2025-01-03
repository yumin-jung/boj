#include <iostream>
using namespace std;

int N, M;
int arr[9];

void dfs(int n, int k) {
    if(k == M) {
        for(int i = 0; i < M; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    } else {
        for (int i = n; i <= N; i++) {
            arr[k] = i;
            dfs(i + 1, k + 1);
        }
    }
}

int main() {
    cin >> N >> M;
    dfs(1, 0);
}