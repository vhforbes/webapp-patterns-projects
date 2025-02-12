// Creating references for the frequently used elements
globalThis.DOM = {};
// ^ global object (window, self or frames in the browser)
const DOM = globalThis.DOM; // Creating a reference for the module
//* Now with every module we have access to the DOM object

document.addEventListener("DOMContentLoaded", () => {
  DOM.todoList = document.getElementById("todo-list");
  DOM.addBtn = document.getElementById("add-btn");
  DOM.todInput = document.getElementById("todo-input");

  DOM.addBtn.addEventListener("click", (event) => {
    // Todo
  });

  DOM.todInput.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      // Todo
    }
  });
});
