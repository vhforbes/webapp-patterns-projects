// MIXIN that will implement Observer Pattern
export const observerMixin = {
  // Set() Array without order and don't accepts duplicates
  observers: new Set(),
  addObserver(obs) {
    this.observers.add(obs);
  },
  removeObserver(obs) {
    this.observers.delete(obs);
  },
  notify() {
    this.observers.forEach((obs) => obs());
  },
};
