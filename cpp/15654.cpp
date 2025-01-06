#include <iostream>
#include <algorithm>
using namespace std;

int N, M;
int arr[9];
int res[9];
bool visited[9] = {false};

void dfs(int n, int k) {
    if (k == M) {
        for (int i = 0; i < M; i++)
            cout << res[i] << " ";
        cout << "\n";
    } else {
        for (int i = 1; i <= N; i++) {
            if (!visited[i]) {
                visited[i] = true;
                res[k] = arr[i - 1];
                dfs(i + 1, k + 1);
                visited[i] = false;
            }
        }
    }
}

int main() {
    cin >> N >> M;

    for (int i = 0; i < N ; i++)
        cin >> arr[i];

    sort(arr, arr + N);
    dfs(1, 0);

    return 0;
}