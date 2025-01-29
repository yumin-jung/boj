#include <iostream>
#include <vector>
using namespace std;

vector<int> graph[1001];
bool visited[1001];

void dfs(int n) {
    visited[n] = true;
    for (int i = 0; i < graph[n].size(); i++) {
        if (visited[graph[n][i]]) {
            continue;
        }
        dfs(graph[n][i]);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    int N, M;
    cin >> N >> M;

    int u, v;
    int cnt = 0;
    for (int i = 0; i < M; i++) {
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    for (int i = 1; i <= N; i++) {
        if (visited[i]) {
            continue;
        }
        dfs(i);
        cnt++;
    }

    cout << cnt;

    return 0;
}