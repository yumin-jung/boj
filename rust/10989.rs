use std::io::{self, BufRead, Write};

fn main() {
    let stdin = io::stdin();
    let stdout = io::stdout();
    let mut writer = io::BufWriter::new(stdout.lock());
    let mut lines = stdin.lock().lines();

    let n: usize = lines.next().unwrap().unwrap().trim().parse().unwrap();
    let mut counts = vec![0; 10001];
    
    for line in lines.take(n) {
        let number: usize = line.unwrap().trim().parse().unwrap();
        counts[number] += 1;
    }

    for (number, &count) in counts.iter().enumerate() {
        for _ in 0..count {
            writeln!(writer, "{}", number).unwrap();
        }
    }
}