#include <iostream>
#include <map>
using namespace std;

map<long long, long long> f;

long long fib(long long n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    if (f.count(n) > 0) return f[n];
    if (n % 2 == 0) {
        long long a = fib(n / 2 - 1);
        long long b = fib(n / 2);
        f[n] = ((2ll * a + b) * b) % 1000000007ll;
    } else {
        long long a = fib((n + 1) / 2);
        long long b = fib((n + 1) / 2 - 1);
        f[n] = (a * a + b * b) % 1000000007ll;
    }
    return f[n];
}

int main() {
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);

    long long n;
    cin >> n;
    cout << fib(n);

    return 0;
}