var assert = require("assert");
var Cruciality = require("../../tasks/cruciality.js");

describe("cruciality", function(){

  it("can check if one is greater than another (when type value is equal)", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type1", 1);
    assert.strictEqual(val1.greaterThan(val2), false);
    assert.strictEqual(val2.greaterThan(val1), true);
  });

  it("cannot check greater than status when types are different", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type2", 1);
    assert.throws(function(){ val1.greaterThan(val2) }, Error, "Cannot compare values of different types");
  });

  it("can check if one is less than another (when type value is equal)", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type1", 1);
    assert.strictEqual(val1.lessThan(val2), true);
    assert.strictEqual(val2.lessThan(val1), false);
  });

  it("cannot check less than status when types are different", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type2", 1);
    assert.throws(function(){ val1.lessThan(val2) }, Error, "Cannot compare values of different types");
  });

  it("can check if one is equal to another (when type value is equal)", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type1", 0);
    var val3 = new Cruciality("type1", 1);
    assert.strictEqual(val1.equalTo(val2), true);
    assert.strictEqual(val1.equalTo(val3), false);
  });

  it("cannot check equality status when types are different", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type2", 0);
    assert.throws(function(){ val1.equalTo(val2) }, Error, "Cannot compare values of different types");
  });

});
