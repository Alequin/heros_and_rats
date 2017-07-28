var assert = require("assert");
var Hero = require("../../characters/hero.js");

describe("hero", function(){

  var hero1;

  beforeEach(function(){
    hero1 = new Hero("Taako", 50, "Ferrero Rocher");
  });

  it("on costruction has name, health and favourite food set and tasks and money empty", function(){
    assert.strictEqual(hero1.name, "Taako");
    assert.strictEqual(hero1.health, 50);
    assert.strictEqual(hero1.favouriteFood, "Ferrero Rocher");
    assert.strictEqual(hero1.money, 0);
    assert.deepEqual(hero1.tasks, []);
  });

  it("can say name", function(){
    assert.strictEqual(hero1.sayName(), "Hail and well met my dudes. Im Taako");
  });

  

});
