function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log('raff');
  },
  describe: function(){
    console.log('This is ' + this.name);
  }
};