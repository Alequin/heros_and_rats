var assert = require("assert");
var Hero = require("../../characters/hero.js");
var Food = require("../../modifier/food.js");

describe("hero", function(){

  var hero1;
  var food1;

  beforeEach(function(){
    hero1 = new Hero("Taako", 50, "Ferrero Rocher");
    food1 = new Food("macaroon", 5, false);
  });

  it("on costruction has name, health and favourite food set and tasks and money empty", function(){
    assert.strictEqual(hero1.name, "Taako");
    assert.strictEqual(hero1.health, 50);
    assert.strictEqual(hero1.maxHealth, 50);
    assert.strictEqual(hero1.favouriteFood, "Ferrero Rocher");
    assert.strictEqual(hero1.money, 0);
    assert.deepEqual(hero1.tasks, []);
  });

  it("can say name", function(){
    assert.strictEqual(hero1.sayName(), "Hail and well met my dudes. Im Taako");
  });

  it("can eat to gain health", function(){
    var startHealth = hero1.health;
    hero1.health -= 5;
    hero1.eat(food1);
    assert.strictEqual(hero1.health, startHealth);
  });

  it("cannot eat to gain health more than max health", function(){
    var startHealth = hero1.health;
    hero1.eat(food1);
    assert.strictEqual(hero1.health, startHealth);
  });

  it("will loose health if food is poisoned", function(){
    var startHealth = hero1.health;
    food1.isPoisoned = true;
    hero1.eat(food1);
    assert.strictEqual(hero1.health, startHealth-5);
  });


});
