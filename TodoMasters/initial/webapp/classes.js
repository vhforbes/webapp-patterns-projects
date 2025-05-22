import { observerMixin } from "./mixins.js";

class TodoItem {
  constructor(text) {
    this.text = text;
  }

  // Value Object pattern, if the values inside a object are the same, we should threat them as equals.
  equals(other) {
    return this.text === other.text;
  }
}

// Cadidate for Singleton (only one todo list is needed)
class TodoList {
  //"#" => private field
  #data = new Set();

  get items() {
    return this.#data;
  }

  // Singleton Impl.
  constructor() {
    if (TodoList.instance) {
      throw new Error("Use TodoList.getInstance() to access the list");
    }
  }
  static instance = null;
  static {
    // Executed once when the class is parsed
    this.instance = new TodoList();
  }
  static getInstance() {
    return this.instance;
  }

  // List Behaviors
  add(item) {
    const array = Array.from(this.#data);
    const todoExists = array.filter((todo) => todo.equals(item).length > 0);

    if (!todoExists.length) {
      this.#data.add(item);
      this.notify();
    }
  }

  delete(todo_text) {
    const array = Array.from(this.#data);
    const todoToDelete = array.filter((todo) => todo.text === todo_text)[0];
    this.#data.delete(todoToDelete);
    this.notify();
  }

  find(todo_text) {
    const array = Array.from(this.#data);
    return array.find((todo) => todo.text === todo_text);
  }

  replaceList(list) {
    this.#data = list;
    this.notify();
  }
}

// Applying observer mixin to the class.
// "TodoList" is a function that creates a class, TodoList.prototype will use the actual instance of the Class
// We "injected" the mixin behavior on the TodoList
Object.assign(TodoList.prototype, observerMixin);

console.log(TodoList.getInstance());

export { TodoList, TodoItem };
