
function Task(difficulty, urgency, reward){

  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isComplete = false;
}

module.exports = Task;
