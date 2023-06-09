function pairElement(str) {
  let newStr = [];
  for (var i= 0; i< str.length; i++){
    let temp = [];
    temp.push(str[i]);
    if (str[i] == 'A'){
      temp.push('T');
    } else if(str[i] == 'T'){
      temp.push('A');
    } else if(str[i] == 'G'){
      temp.push('C');
    } else if(str[i] == 'C'){
      temp.push('G');
    };
    newStr.push(temp);
  };
  console.log(newStr);
  return newStr;
}

pairElement("GCG");