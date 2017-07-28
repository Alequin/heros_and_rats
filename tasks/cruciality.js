
function Cruciality(type, value){
  this.type = type;
  this.value = value;
}

Cruciality.prototype.greaterThan = function(toCompare){
  return this.compare(toCompare) > 0;
}

Cruciality.prototype.lessThan = function(toCompare){
  return this.compare(toCompare) < 0;
}


Cruciality.prototype.compare = function(toCompare){
  if(this.type != toCompare.type){
    throw new Error("Cannot compare values of different types");
  }

  if(this.value > toCompare.value){
    return 1;
  }else
  if(this.value < toCompare.value){
    return -1;
  }else{
    return 0;
  }
}

module.exports = Cruciality;
