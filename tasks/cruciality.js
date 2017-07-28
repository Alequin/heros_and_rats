
function Cruciality(type, value){
  this.type = type;
  this.value = value;
}

Cruciality.prototype.greaterThan = function(toCompare){
  if(this.type != toCompare.type){
    throw "The two values are not of the same type"
  }
  return this.value > toCompare.value;
}

module.exports = Cruciality;
