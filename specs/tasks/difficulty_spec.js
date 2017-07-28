var assert = require("assert");
var difficulty = require("../../tasks/difficulty.js");

describe("difficulty", function(){

  it("Should be able to get the first level of difficulty", function(){
    assert.strictEqual(difficulty.basic.type, "difficulty");
    assert.strictEqual(difficulty.basic.value, 0);
  });

  it("Should be able to get the second level of difficulty", function(){
    assert.strictEqual(difficulty.easy.type, "difficulty");
    assert.strictEqual(difficulty.easy.value, 1);
  });

  it("Should be able to get the third level of difficulty", function(){
    assert.strictEqual(difficulty.normal.type, "difficulty");
    assert.strictEqual(difficulty.normal.value, 2);
  });

  it("Should be able to get the fourth level of difficulty", function(){
    assert.strictEqual(difficulty.hard.type, "difficulty");
    assert.strictEqual(difficulty.hard.value, 3);
  });

  it("Should be able to get the fifth level of difficulty", function(){
    assert.strictEqual(difficulty.extreme.type, "difficulty");
    assert.strictEqual(difficulty.extreme.value, 4);
  });

});
