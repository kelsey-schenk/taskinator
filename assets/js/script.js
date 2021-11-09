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
    // When we use square brackets in a selector, we're trying to select
    // an HTML element by one of its attributes
    // Single quotes are used to wrap the attribute's value because
    // the string would fail because it would assume the string ended at name
    // .value gets to just the value property, now the value of taskNameInput variable will be the
    // text entered in the <input> element
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // Adds task type to task added
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);
    // Create list item
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // Add entire list item to list
    tasksToDoEl.appendChild(listItemEl); 
    }; 


// Changed the variable at the top, also has to be changed here
// Script now finds the <form> element in the HTML
// Since the entire form is being targeted instead of only button, can't use "click" anymore 
// Submit is a form specific event (4.2.5)
formEl.addEventListener("submit", createTaskHandler);





