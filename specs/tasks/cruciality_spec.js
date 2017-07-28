var assert = require("assert");
var Cruciality = require("../../tasks/cruciality.js");

describe("cruciality", function(){

  it("can check if one is greater than another (when type value is equal)", function(){
    var val1 = new Cruciality("type1", 0);
    var val2 = new Cruciality("type1", 1);
    assert.strictEqual(val1.greaterThan(val2), false);
    assert.strictEqual(val2.greaterThan(val1), true);
  });

});
