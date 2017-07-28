
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

module.exports = Hero;
