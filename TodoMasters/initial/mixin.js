// MIXIN that will implement the Observer Pattern
// ? why ? The list will change, and I want to observe changes on that list

const observerMixin = {
  observers: new Set(), // Don't accept duplicates and there is no order
  addObserver(obs) {
    this.observers.add(obs);
  },
  removeObserver(obs) {
    this.observers.delete(obs);
  },
};
