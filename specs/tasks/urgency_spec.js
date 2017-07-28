var assert = require("assert");
var urgency = require("../../tasks/urgency.js");

describe("urgency", function(){

  it("Should be able to get the first level of urgency", function(){
    assert.strictEqual(urgency.minimal.type, "urgency");
    assert.strictEqual(urgency.minimal.value, 0);
  });

  it("Should be able to get the second level of urgency", function(){
    assert.strictEqual(urgency.low.type, "urgency");
    assert.strictEqual(urgency.low.value, 1);
  });

  it("Should be able to get the third level of urgency", function(){
    assert.strictEqual(urgency.medium.type, "urgency");
    assert.strictEqual(urgency.medium.value, 2);
  });

  it("Should be able to get the fourth level of urgency", function(){
    assert.strictEqual(urgency.high.type, "urgency");
    assert.strictEqual(urgency.high.value, 3);
  });

  it("Should be able to get the fifth level of urgency", function(){
    assert.strictEqual(urgency.critical.type, "urgency");
    assert.strictEqual(urgency.critical.value, 4);
  });

  it("can compare values", function(){
    assert.strictEqual(urgency.minimal.greaterThan(urgency.low), false);
    assert.strictEqual(urgency.minimal.lessThan(urgency.low), true);
    assert.strictEqual(urgency.minimal.equalTo(urgency.minimal), true);
  });

});
