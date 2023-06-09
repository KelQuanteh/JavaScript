function sumPrimes(num) {
  function isPrime(number) {
  if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  let arr = [];
  let i = 2; 
  while(i <= num){
    if(isPrime(i)){
      arr.push(i);
    };
    i++;
  };

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}

sumPrimes(10);