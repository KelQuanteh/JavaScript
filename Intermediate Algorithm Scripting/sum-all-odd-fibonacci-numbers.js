function sumFibs(num) {
  function fib(x){
    if(x == 0 | x == 1){
      return x;
    } else 
      return fib(x-1) + fib(x-2);
  };

  function isEven(number) {
    return number % 2 === 0;
  };

  let arr = [];
  let f = 0; 

  while(fib(f) <= num){
    arr.push(fib(f));
    f++;
  };

  let newArr = [];
  for (var i = 0; i < arr.length; i++){
    if(!isEven(arr[i])){
      newArr.push(arr[i]);
    };
  };

  const sum = newArr.reduce((accumulator, currentValue) => accumulator  + currentValue, 0);

  return sum;
}

sumFibs(4);