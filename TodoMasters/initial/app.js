import { TodoList } from "./webapp/classes.js";
import { Command, CommandExecutor, Commands } from "./webapp/command.js";
import { LocalStorage } from "./webapp/storage.js";

// Creating references for the frequently used elements
globalThis.DOM = {};
// ^ global object:
// browser => window
// nodejs => global
// worker => self

const DOM = globalThis.DOM; // Creating a reference for the module (local pointer for the module)
//* Now with every module we have access to the DOM object

function renderList() {
  DOM.todoList.innerHTML = "";

  const list = TodoList.getInstance();

  for (let todo of list.items) {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    listItem.innerHTML = `${todo.text} <button class='delete-btn'>Delete</button>`;
    listItem.dataset.text = todo.text;
    DOM.todoList.appendChild(listItem);
  }
}

// Fire when DOM is on memory and ready to be used
document.addEventListener("DOMContentLoaded", () => {
  DOM.todoList = document.getElementById("todo-list");
  DOM.addBtn = document.getElementById("add-btn");
  DOM.todoInput = document.getElementById("todo-input");

  DOM.addBtn.addEventListener("click", (event) => {
    CommandExecutor.execute(new Command(Commands.ADD));
  });

  DOM.todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const todoToDelete = event.target.parentNode.dataset.text;

      const cmd = new Command(Commands.DELETE, [todoToDelete]);
      CommandExecutor.execute(cmd);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  TodoList.getInstance().addObserver(renderList);
});

document.addEventListener("DOMContentLoaded", () => {
  LocalStorage.load();
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "p") {
    event.preventDefault();
    CommandExecutor.execute(new Command(Commands.ADD));
  }
});
