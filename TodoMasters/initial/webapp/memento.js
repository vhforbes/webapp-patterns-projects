export const TodoHistory = {
  history: [],
  push(state) {
    if (state) {
      this.history.push(); // todo
    }
  },
  pop() {
    if (this.history.length > 1) {
      this.history.pop(); // this will be the current state thats why we wont return it directly, we want to clear it
      return this.history.pop();
    }
  },
};
