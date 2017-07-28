var Cruciality = require("./cruciality.js");

var typeIdentifier = "urgency"

var urgency = {

  minimal: new Cruciality(typeIdentifier, 0),

  low: new Cruciality(typeIdentifier, 1),

  medium: new Cruciality(typeIdentifier, 2),

  high: new Cruciality(typeIdentifier, 3),

  critical: new Cruciality(typeIdentifier, 4),

}

module.exports = urgency;
