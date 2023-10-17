function miniMaxSum(arr) {
    // Function to calculate the sum of an array
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // Function to calculate the factorial of a number (not used)
    function factorial(n) {
        if (n <= 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
    }
      
    // Function to calculate combinations (not used)
    function combinations(arr, k) {
        const n = arr.length;
        if (k === 0 || k === n) {
          return 1;
        }
      
        if (k > n) {
          return 0;
        }
      
        return factorial(n) / (factorial(k) * factorial(n - k));
    }
    
    // Function to swap two elements in an array
    function swapElements(arr, index1, index2) {
        if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
            return; // Invalid indices for swapping
        } 
        // Swap the elements
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    // Calculate the total number of combinations (not used)
    const c = combinations(arr, 4);
    
    let a = 0; // Counter
    let max = 0; // Initialize max
    let min = sumArray(arr); // Initialize min as the sum of all elements

    let sum = 0; // Initialize sum to 0
    let i = 0; // Initialize i to 0

    while(a <= c){
        let newArr = [arr[0], arr[1], arr[2], arr[3]]; // Create a new array with the first 4 elements from arr  

        sum = sumArray(newArr); // Calculate the sum of newArr
        
        if(sum > max){
            max = sum; // Update max if sum is greater
        }
        
        if(sum < min){
            min = sum; // Update min if sum is smaller
        }

        swapElements(arr, i, 4); // Swap elements at index i and 4

        i++;
        a++; 
    }

    console.log(min, max); // Print the min and max sums
}

let arr = [7, 69, 2, 221, 8974]; 
miniMaxSum(arr); // Call the miniMaxSum function with the array
