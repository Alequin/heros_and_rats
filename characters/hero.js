
function Hero(name, health, favouriteFood){

  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;

  this.money = 0;
  this.tasks = [];
}

module.exports = Hero;
