function sumAll(arr) {
  let newArr = arr.sort(function(a, b){
    return a - b;
  });
  let vet = [];
  for (let i= newArr[0]; i <= newArr[1]; i++){
    vet.push(i);
  };
  let sum = 0; 
  for (let i = 0; i < vet.length; i++){
    sum = sum + vet[i];
  };
  return sum; 
}


console.log(sumAll([10, 5]));