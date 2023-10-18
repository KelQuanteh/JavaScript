// This function takes an array of candle heights as input and counts
// how many of them are the tallest.

function birthdayCakeCandles(candles) {
    let max = 0; // Initialize a variable to store the maximum candle height, starting at 0

    // Loop through the array of candles to find the maximum height
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i]; // If the current candle is taller than the current maximum, update the maximum
        }
    }
    
    let count = 0; // Initialize a variable to count the number of tallest candles
    
    // Loop through the array of candles again to count how many are of the maximum height
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) {
            count++; // If the current candle has the maximum height, increment the count
        }
    }

    return count; // Return the count of the tallest candles
}

let candles = [4, 4, 1, 3];
birthdayCakeCandles(candles); // Call the function with the example array
