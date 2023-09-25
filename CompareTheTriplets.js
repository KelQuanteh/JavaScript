function CompareTheTriplets(arr1, arr2){
    let arr3 = [];
    
    let a= 0;
    let b= 0;
    
    for(let i = 0; i < 3; i++){
        if(arr1[i] > arr2[i])
            a++;
        else if(arr1[i] < arr2[i])
            b++;
    }

    arr3.push(a);
    arr3.push(b);

    return arr3; 
}

let arr1 = [5, 6, 7];
let arr2 = [3, 6, 10]; 

console.log(CompareTheTriplets(arr1, arr2));