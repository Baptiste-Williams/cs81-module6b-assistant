// Constructor function for a Personal Assistant
function PersonalAssistant(name) {
  this.name = name;      // My Assistant's name
  
  this.tasks = [];       // Task List
  
  this.mood = "neutral"; // Starting mood
}

//This will Add a new task to the assistant's list
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  
  console.log(`${this.name} added a new task: "${task}"`);
};

// Will Complete the first task in the list
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const doneTask = this.tasks.shift();
    console.log(`Completing task: ${doneTask}`);
    console.log(`You have ${this.tasks.length} tasks left.`);
  } else {
    console.log("No tasks to complete.");
  }
};

//This will show the assistant's current mood
PersonalAssistant.prototype.reportMood = function() {
  console.log(`Mood: ${this.mood}`);
};

