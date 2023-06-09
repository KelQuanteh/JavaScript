function truthCheck(collection, pre) {
  var count = 0;
  for(var i = 0; i < collection.length; i++){
    if(Boolean(collection[i][pre])){
      count++;
    };
  };
  if(count == collection.length){
    return true;
  } else 
    return false;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");