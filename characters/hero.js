
function Hero(name, health, favouriteFood){

  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;

  this.maxHealth = health;
  this.money = 0;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return "Hail and well met my dudes. Im " + this.name;
}

Hero.prototype.eat = function(food){
  if(food.isPoisoned){
    this.health -= food.modifier;
  }else
  if((this.health + food.modifier) <= this.maxHealth){
    this.health += food.modifier;
  }
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.viewAllTasks = function(callBack){
  return this.viewTasks(
    function(task){return task.description}
  );
}

Hero.prototype.viewCompletedTasks = function(callBack){
  return this.viewTasks(
    function(task){
      if(task.isComplete){
        return task.description
      }else{
        return "";
      }
    }
  );
}

Hero.prototype.viewTasks = function(callBack){

  var output = ""
  for(var j in this.tasks){
    var returned = callBack(this.tasks[j]);
    if(returned != ""){
      output += returned + "\n";
    }
  }
  return output.slice(0, output.length-1);
}
module.exports = Hero;
