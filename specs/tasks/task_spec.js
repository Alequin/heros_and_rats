var assert = require("assert");
var difficulty = difficulty = require("../../tasks/difficulty.js");
var urgency = require("../../tasks/urgency.js");
var Task = require("../../tasks/task.js");

describe("task", function(){

  it("should have a difficulty, urgency, reward and a false complete status on construction", function(){
    var task = new Task(difficulty.hard, urgency.medium, 100);
    assert.strictEqual(task.difficulty, difficulty.hard);
    assert.strictEqual(task.urgency, urgency.medium);
    assert.strictEqual(task.reward, 100);
    assert.strictEqual(task.isComplete, false);
  });

  it("cannont construct diffculty with cruciality of wrong type", function(){
    var test = function(){new Task(urgency.low, urgency.medium, 100)}
    assert.throws(test, Error, "Difficulty must be of type difficulty. Current: urgency");
  });

});
