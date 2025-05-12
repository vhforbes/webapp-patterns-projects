// Creating references for the frequently used elements
globalThis.DOM = {};
// ^ global object:
// browser => window
// nodejs => global
// worker => self

const DOM = globalThis.DOM; // Creating a reference for the module (local pointer for the module)
//* Now with every module we have access to the DOM object

// Fire when DOM is on memory and ready to be used
document.addEventListener("DOMContentLoaded", () => {
  DOM.todoList = document.getElementById("todo-list");
  DOM.addBtn = document.getElementById("add-btn");
  DOM.todoInput = document.getElementById("todo-input");

  DOM.addBtn.addEventListener("click", (event) => {
    // Todo
  });

  DOM.todoInput.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      // Todo
    }
  });
});
