function diagonalDifference(arr) {
    let size = arr.length; 

    let prim = []; 
    let sec = []; 

    var primSum = 0;
    var secmSum = 0;

    for(var i = 0; i < size; i++){
        var j = i;
        prim.push(arr[i][j]);
    }

    for(var i = 0; i < prim.length; i++){
        primSum += prim[i]; 
    }

    for(var i = size - 1; i >= 0; i-- ){
        var j = size - 1 - i;
        sec.push(arr[i][j]);  
    }    

    for(var i = 0; i < sec.length; i++){
        secmSum += sec[i]; 
    }
     
    let value = Math.abs(primSum - secmSum);
    
    return value; 
}