#include <iostream>
#include <cstring>
using namespace std;

int cnt = 0;

int recursion (const char * s, int l, int r) {
    cnt++;
    if (l >= r) return 1;
    else if (s[l] != s[r]) return 0;
    else return recursion(s, l + 1, r - 1);
}

int isPalindrome(const char * s) {
    return recursion(s, 0, strlen(s) - 1);
}

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    int T;
    cin >> T;

    string s;
    for (int i = 0; i < T; i++) {
        cin >> s;
        cout << isPalindrome(s.c_str()) << " " << cnt << "\n";
        cnt = 0;
    }

    return 0;
}