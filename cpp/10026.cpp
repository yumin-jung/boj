#include <iostream>
#include <deque>
#include <utility>
using namespace std;

int N;
string arr[101];
bool visited[101][101];

int dx[] = {-1, 1, 0 , 0};
int dy[] = {0, 0, -1, 1};

void dfs(int x, int y) {
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
            continue;
        }

        if (visited[nx][ny] == 0 && arr[nx][ny] == arr[x][y]) {
            visited[nx][ny] = true;
            dfs(nx, ny);
        }
    }
}

int main() {
    cin >> N;

    for (int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    int res = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (!visited[i][j]) {
                res++;
                visited[i][j] = true;
                dfs(i, j);
            }
        }
    }

    cout << res << " ";

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (arr[i][j] == 'G') {
                arr[i][j] = 'R';
            }
            visited[i][j] = false;
        }
    }

    int res_color_blindness = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (!visited[i][j]) {
                res_color_blindness++;
                visited[i][j] = true;
                dfs(i, j);
            }
        }
    }

    cout << res_color_blindness;

    return 0;
}