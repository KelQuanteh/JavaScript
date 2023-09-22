function plusMInus(arr){
    let pos = [];
    let neg = [];
    let neu = []; 

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0)
            pos.push(arr[i]);
        else if(arr[i] < 0)
            neg.push(arr[i]);
        else 
            neu.push(arr[i]);
    }

    let rounded1 = Math.round((pos.length/arr.length) * 1e6) / 1e6;
    let rounded2 = Math.round((neg.length/arr.length) * 1e6) / 1e6;
    let rounded3 = Math.round((neu.length/arr.length) * 1e6) / 1e6;

    
    console.log(rounded1);
    console.log(rounded2);
    console.log(rounded3);
}

let arr = [-4, 3, -9, 0, 4, 1];
plusMInus(arr);