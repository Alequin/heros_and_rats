
function Cruciality(type, value){
  this.type = type;
  this.value = value;
}

Cruciality.prototype.greaterThan = function(toCompare){
  if(this.type != toCompare.type){
    throw new Error("Cannot compare values of different types");
  }
  return this.value > toCompare.value;
}

module.exports = Cruciality;
