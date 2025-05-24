import { TodoList } from "./classes.js";

export const TodoHistory = {
  history: [],
  push(state) {
    if (state) {
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

todoList.addObserver(function () {
  TodoHistory.push(todoList.items);
});
