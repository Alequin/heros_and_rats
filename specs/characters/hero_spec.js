var assert = require("assert");
var Hero = require("../../characters/hero.js");

describe("hero", function(){

  it("on costruction has name, health and favourite food set and tasks and money empty", function(){
    var hero = new Hero("Taako", 50, "Ferrero Rocher");
    assert.strictEqual(hero.name, "Taako");
    assert.strictEqual(hero.health, 50);
    assert.strictEqual(hero.favouriteFood, "Ferrero Rocher");
    assert.strictEqual(hero.money, 0);
    assert.deepEqual(hero.tasks, []);
  });

});
