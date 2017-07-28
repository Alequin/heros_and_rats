var Cruciality = require("./cruciality.js");

var difficulty = {

  basic: new Cruciality("difficulty", 0),

  easy: new Cruciality("difficulty", 1),

  normal: new Cruciality("difficulty", 2),

  hard: new Cruciality("difficulty", 3),

  extreme: new Cruciality("difficulty", 4),

}

module.exports = difficulty;
