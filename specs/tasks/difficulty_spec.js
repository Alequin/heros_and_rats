var assert = require("assert");
var difficulty = require("../../tasks/difficulty.js");

describe("difficulty", function(){

  it("Should be able to get the first levels of difficulty", function(){
    assert.strictEqaul(difficulty.basic.type, "difficulty");
    assert.strictEqaul(difficulty.basic.value, 0);
  });

});
