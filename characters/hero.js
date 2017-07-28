
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

Hero.prototype.viewTasks = function(callBack){

  var output = ""
  for(var j in this.tasks){
    output += callBack(this.tasks[j]);
    if(j < this.tasks.length - 1){
      output += "\n";
    }
  }

  return output;
}



module.exports = Hero;
