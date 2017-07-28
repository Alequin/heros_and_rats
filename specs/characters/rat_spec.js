var assert = require("assert");
var Food = require("../../modifier/food.js");
var Rat = require("../../characters/rat.js");

describe("rat", function(){

  it("can poison food", function(){
    var food = new Food("macaroon", 5, false);
    var rat = new Rat();

    assert.strictEqual(food.isPoisoned, false);
    rat.touchFood(food);
    assert.strictEqual(food.isPoisoned, true);
  });

});
