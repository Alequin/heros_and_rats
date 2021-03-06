var assert = require("assert");
var difficulty = difficulty = require("../../tasks/difficulty.js");
var urgency = require("../../tasks/urgency.js");
var Task = require("../../tasks/task.js");

describe("task", function(){

  it("should have a difficulty, urgency, reward and a false complete status on construction", function(){
    var task = new Task("find 100 green eggs", difficulty.hard, urgency.medium, 100);
    assert.strictEqual(task.description, "find 100 green eggs");
    assert.strictEqual(task.difficulty, difficulty.hard);
    assert.strictEqual(task.urgency, urgency.medium);
    assert.strictEqual(task.reward, 100);
    assert.strictEqual(task.isComplete, false);
  });

  it("cannont construct diffculty with cruciality of wrong type", function(){
    var test = function(){new Task(urgency.low, urgency.medium, 100)}
    assert.throws(test, Error, "Difficulty must be of type difficulty. Current: urgency");
  });

  it("cannont construct urgency with cruciality of wrong type", function(){
    var test = function(){new Task(difficulty.hard, difficulty.normal, 100)}
    assert.throws(test, Error, "Urgency must be of type urgency. Current: difficulty");
  });

});
