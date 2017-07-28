var assert = require("assert");
var Food = require("../../modifier/food.js");

describe("food", function(){

  it("on construction can set name, modifier and poisoned status", function(){
    var food1 = new Food("macaroon", 5, false);
    assert.strictEqual(food1.name, "macaroon");
    assert.strictEqual(food1.modifier, 5);
    assert.strictEqual(food1.isPoisoned, false);
  });

});
