function myReplace(str, before, after) {
  let newStr = str.split(' ');
  for (var i=0; i < newStr.length; i++){
    if (newStr[i] == before){
      if(before[0] === before[0].toUpperCase()){
        newStr[i] = after.charAt(0).toUpperCase() + after.slice(1);
      } else 
        newStr[i] = after.charAt(0).toLowerCase() + after.slice(1);
    }
  };
  var arr = newStr.join(' ');
  console.log(arr);
  return arr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");