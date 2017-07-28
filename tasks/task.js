
function Task(difficulty, urgency, reward){

  if(difficulty.type != "difficulty"){
    throw new Error("Difficulty must be of type difficulty. Current: " + difficulty.type);
  }
  if(urgency.type != "urgency"){
    throw new Error("Difficulty must be of type difficulty. Current: " + urgency.type);
  }

  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isComplete = false;
}

module.exports = Task;
