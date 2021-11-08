// Changed variable so that browser will be able to listen to an event
// happening in the entire form rather than just the button
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

// Replicates the code block in the anonymous function
// Important to place this before the event listener
// Otherwise we'd receive an error that createTaskHandler() isn't defined because we'd be calling the funciton before it
// was defined
var createTaskHandler = function(event) { 

    event.preventDefault(); 

    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 
    listItemEl.textContent = "This is a new task."; 
    tasksToDoEl.appendChild(listItemEl); 
    }; 


// Changed the variable at the top, also has to be changed here
// Script now finds the <form> element in the HTML
// Since the entire form is being targeted instead of only button, can't use "click" anymore 
// Submit is a form specific event (4.2.5)
formEl.addEventListener("submit", createTaskHandler);





