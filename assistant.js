// Constructor function for a Personal Assistant
function PersonalAssistant(name) {
  this.name = name;      // My Assistant's name
  this.tasks = [];       // Task List
  this.mood = "neutral"; // Starting mood
}

// This will add a new task to the assistant's list
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  
  console.log(`${this.name} added a new task: "${task}"`);
};

// This will complete the first task in the list
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const doneTask = this.tasks.shift();
    console.log(`Completing task: ${doneTask}`);
    console.log(`You have ${this.tasks.length} tasks left.`);
  } else {
    console.log("No tasks to complete.");
  }
};

// This will show the assistant's current mood
PersonalAssistant.prototype.reportMood = function() {
  console.log(`Mood: ${this.mood}`);
};

// === Simulate your day ===
let myAssistant = new PersonalAssistant("Branden"); // Your assistant’s name

console.log(`Hi! I'm ${myAssistant.name}, your assistant.`);

myAssistant.reportMood();       // Mood before tasks
myAssistant.mood = "productive";

myAssistant.addTask("Finish JS assignment");
myAssistant.addTask("Go to the gym");
myAssistant.addTask("Respond to emails");

myAssistant.completeTask();     // Finish 1

myAssistant.completeTask();     // Finish 2

myAssistant.mood = "accomplished";

myAssistant.reportMood();       // Mood after tasks





