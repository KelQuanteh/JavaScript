function palindrome(str) {
  const cleaned = str.replace(/[^\w\s]|_/gi, '').replace(/\s+/g, '');
  let clean = cleaned.toLowerCase();
  console.log(clean)
  let opp = [];
  for(var i = clean.length - 1; i > -1; i--){
    opp.push(clean[i]);
  };
  let joint = opp.join('');
  if(joint == clean){
    return true;
  } else 
    return false;
}

palindrome("0_0 (: /-\ :) 0-0");