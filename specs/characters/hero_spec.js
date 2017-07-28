var assert = require("assert");
var Hero = require("../../characters/hero.js");
var Food = require("../../modifier/food.js");
var Task = require("../../tasks/task.js");
var difficulty = difficulty = require("../../tasks/difficulty.js");
var urgency = require("../../tasks/urgency.js");

describe("hero", function(){

  var hero1;
  var food1;
  var tasks;

  beforeEach(function(){
    hero1 = new Hero("Taako", 50, "Ferrero Rocher");
    food1 = new Food("macaroon", 5, false);

    tasks = [];
    tasks.push(new Task("task 1", difficulty.hard, urgency.medium, 150));
    tasks.push(new Task("task 2", difficulty.basic, urgency.minimal, 10));
    tasks.push(new Task("task 3", difficulty.extreme, urgency.high, 500));
    tasks.push(new Task("task 4", difficulty.normal, urgency.critical, 300));
    tasks.push(new Task("task 5", difficulty.easy, urgency.low, 20));
  });

  it("on costruction has name, health and favourite food set and tasks and money empty", function(){
    assert.strictEqual(hero1.name, "Taako");
    assert.strictEqual(hero1.health, 50);
    assert.strictEqual(hero1.maxHealth, 50);
    assert.strictEqual(hero1.favouriteFood, "Ferrero Rocher");
    assert.strictEqual(hero1.money, 0);
    assert.deepEqual(hero1.tasks, []);
  });

  it("can say name", function(){
    assert.strictEqual(hero1.sayName(), "Hail and well met my dudes. Im Taako");
  });

  it("can eat to gain health", function(){
    var startHealth = hero1.health;
    hero1.health -= 5;
    hero1.eat(food1);
    assert.strictEqual(hero1.health, startHealth);
  });

  it("cannot eat to gain health more than max health", function(){
    var startHealth = hero1.health;
    hero1.eat(food1);
    assert.strictEqual(hero1.health, startHealth);
  });

  it("will loose health if food is poisoned", function(){
    var startHealth = hero1.health;
    food1.isPoisoned = true;
    hero1.eat(food1);
    assert.strictEqual(hero1.health, startHealth-5);
  });

  it("can add tasks", function(){
    for(var task of tasks){
      hero1.addTask(task);
    }
    assert.deepEqual(hero1.tasks, tasks);
  });

  it("can view tasks", function(){
    for(var task of tasks){
      hero1.addTask(task);
    }

    var expected = "task 1\ntask 2\ntask 3\ntask 4\ntask 5"
    var result = hero1.viewAllTasks()
    assert.strictEqual(result, expected);
  });
});
