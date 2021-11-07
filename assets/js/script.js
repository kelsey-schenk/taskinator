var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Replicates the code block in the anonymous function
// Important to place this before the event listener
// Otherwise we'd receive an error that createTaskHandler() isn't defined because we'd be calling the funciton before it
// was defined
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);
