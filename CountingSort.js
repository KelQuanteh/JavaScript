function countSort(arr) {
    const n = arr.length;

    // Find the maximum integer in the array
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        const integer = parseInt(arr[i][0]);
        if (integer > max) {
            max = integer;
        }
    }

    // Initialize an array of empty arrays to store strings for each integer
    const counts = new Array(max + 1).fill(null).map(() => []);

    // Populate the counts array with strings for each integer
    for (let i = 0; i < n; i++) {
        const integer = parseInt(arr[i][0]);
        const string = arr[i][1];
        if (i < n / 2) {
            counts[integer].push('-');
        } else {
            counts[integer].push(string);
        }
    }

    // Flatten the counts array and join the strings
    const result = counts.flat().join(' ');

    console.log(result);
}

// Sample input
const input = [
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['4', 'ij'],
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['0', 'ij'],
    ['4', 'that'],
    ['3', 'be'],
    ['0', 'to'],
    ['1', 'be'],
    ['5', 'question'],
    ['1', 'or'],
    ['2', 'not'],
    ['4', 'is'],
    ['2', 'to'],
    ['4', 'the'],
];

countSort(input);
