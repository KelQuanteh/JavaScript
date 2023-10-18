# Birthday Cake Candles Counter

## Project Description

This Git repository contains a simple JavaScript function, `birthdayCakeCandles`, which is designed to help you count the number of tallest candles on a birthday cake. It is a common tradition to place one candle on a cake for each year of the person's age and only blow out the tallest candle. This function takes an array of candle heights and returns the count of the candles that are tallest.

## Function Description

The `birthdayCakeCandles` function has the following signature:

```javascript
function birthdayCakeCandles(candles) {
    // Function implementation
}
```

- Input: An array `candles` of integer values, where each integer describes the height of a candle.
- Output: An integer representing the number of candles that are tallest.

## Example

```javascript
let candles = [4, 4, 1, 3];
let result = birthdayCakeCandles(candles);
// In this example, the maximum height candles are 4 units high. There are 2 of them, so the function will return 2.
```

## Usage

You can use this function by importing it into your JavaScript code and passing an array of candle heights as an argument. The function will return the count of the tallest candles.

```javascript
const candles = [4, 4, 1, 3];
const result = birthdayCakeCandles(candles);
console.log(`The number of tallest candles is: ${result}`);
```

## Input Format

The input format for this function is as follows:

- The first line should contain a single integer, `n`, which is the size of the array.
- The second line should contain space-separated integers, where each integer describes the height of a candle.

## Constraints

- The array `candles` will have at least 1 element and at most 10^5 elements.
- Each candle height is an integer between 1 and 10^7.

## Sample Input and Output

### Sample Input 0

```
4
3 2 1 3
```

### Sample Output 0

```
2
```

#### Explanation 0

In this sample, the candle heights are [3, 2, 1, 3]. The tallest candles are 3 units high, and there are 2 of them. Therefore, the function returns 2, as there are 2 tallest candles on the cake.

Feel free to clone this Git repository and use the `birthdayCakeCandles` function in your projects or make any improvements as needed. Enjoy counting birthday cake candles! 🎂🕯️