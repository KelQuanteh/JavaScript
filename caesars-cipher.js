function rot13(str) {
  let decoded = '';
  
  for(var i = 0; i < str.length; i++){
    let charCode = str.charCodeAt(i);
    if(/[A-Z]/.test(str[i])){
      let shifted = charCode - 13; 
      if(str[i] === str[i].toUpperCase() && shifted < 65){
        shifted += 26;
      }
      decoded += String.fromCharCode(shifted);
    } else {
      decoded += str[i];
    }      
  }
  return decoded;  
}

rot13("SERR PBQR PNZC");