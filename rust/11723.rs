use std::io::{self, Write, BufRead, BufWriter};

fn main() {
    let stdin = io::stdin();
    let mut stdout = BufWriter::new(io::stdout());
    let mut lines = stdin.lock().lines();
    let m: usize = lines.next().unwrap().unwrap().trim().parse().unwrap();
    let mut set: u32 = 0;

    for _ in 0..m {
        let line = lines.next().unwrap().unwrap();
        let mut parts = line.split_whitespace();
        let command = parts.next().unwrap();
        
        match command {
            "add" => {
                let x: u32 = parts.next().unwrap().parse().unwrap();
                set |= 1 << (x - 1);
            }
            "remove" => {
                let x: u32 = parts.next().unwrap().parse().unwrap();
                set &= !(1 << (x - 1));
            }
            "check" => {
                let x: u32 = parts.next().unwrap().parse().unwrap();
                writeln!(stdout, "{}", if set & (1 << (x - 1)) != 0 { 1 } else { 0 }).unwrap();
            }
            "toggle" => {
                let x: u32 = parts.next().unwrap().parse().unwrap();
                set ^= 1 << (x - 1);
            }
            "all" => {
                set = (1 << 20) - 1;
            }
            "empty" => {
                set = 0;
            }
            _ => {}
        }
    }
}