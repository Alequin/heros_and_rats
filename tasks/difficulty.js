var Cruciality = require("./cruciality.js");

var typeIdentifier = "difficulty"

var difficulty = {

  basic: new Cruciality(typeIdentifier, 0),

  easy: new Cruciality(typeIdentifier, 1),

  normal: new Cruciality(typeIdentifier, 2),

  hard: new Cruciality(typeIdentifier, 3),

  extreme: new Cruciality(typeIdentifier, 4),

}

module.exports = difficulty;
