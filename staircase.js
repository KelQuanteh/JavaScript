function staircase(n) {
    let x = '#';
    let y = ' ';

    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let hashes = '#'.repeat(i);
        let row = spaces + hashes;
        console.log(row);
    }
}

let n = 8;
staircase(n);
