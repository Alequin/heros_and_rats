var assert = require("assert");
var difficulty = require("../../tasks/difficulty.js");

describe("difficulty", function(){

  it("Should be able to get the first levels of difficulty", function(){
    assert.strictEqual(difficulty.basic.type, "difficulty");
    assert.strictEqual(difficulty.basic.value, 0);
  });

});
