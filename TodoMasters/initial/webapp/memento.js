import { TodoList } from "./classes.js";

// Caretaker
export const TodoHistory = {
  history: [],
  push(state) {
    if (state) {
      // Memento object that stores data "new Set([...state]"
      this.history.push(new Set([...state]));
    }
  },
  pop() {
    if (this.history.length > 1) {
      this.history.pop(); // this will be the current state thats why we wont return it directly, we want to clear it
      return this.history.pop();
    }
  },
};

const todoList = TodoList.getInstance();

todoList.addObserver(function pushNewStateToHistory() {
  TodoHistory.push(todoList.items);
});
