const redux = require("redux");
const createStore = redux.createStore;

const initalState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initalState, action) => {
  if (action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1, // Always do this way
    };
  }
  if (action.type == "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value, // Always do this way
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
// This gets triggered whenever state is updated
store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

// Dispayching action
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
