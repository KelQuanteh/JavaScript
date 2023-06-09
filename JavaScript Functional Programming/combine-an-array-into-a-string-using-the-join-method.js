function sentensify(str) {
  // Only change code below this line
  let split = str.split(/\W+/);
  let joinStr = split.join(" ");
  return joinStr;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");