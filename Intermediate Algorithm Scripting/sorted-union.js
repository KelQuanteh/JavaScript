function uniteUnique(arr) {
  let newArr = [];
  if (arguments.length == 1){
    return arguments[0];
  } else {
    newArr = [].concat(...arguments);
    var filtered = [...new Set(newArr)];
    return filtered;
  }
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);