// ACTIONS
const incrementAction = {
  type: "INCREMENT",
};
const incrementByTenAction = {
  type: "INCREMENTBYTEN",
};

const decrementAction = {
  type: "DECREMENT",
};
const decrementByTenAction = {
  type: "DECREMENTBYTEN",
};
const resetAction = {
  type: "RESET",
};

// REDUCER
let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENTBYTEN":
      return state + 10;
    case "DECREMENT":
      return state - 1;
    case "DECREMENTBYTEN":
      return state - 10;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const incrementByTenButton = document.getElementById("button-incrementByTen");
const decrementButton = document.getElementById("button-decrement");
const decrementByTenButton = document.getElementById("button-decrementByTen");
const resetButton = document.getElementById("button-reset");

// MAIN
const render = () => {
  counterRender.innerText = store.getState();
};

render();
store.subscribe(render);

incrementButton.addEventListener("click", () => store.dispatch(incrementAction));
incrementByTenButton.addEventListener("click", () => store.dispatch(incrementByTenAction));
decrementButton.addEventListener("click", () => store.dispatch(decrementAction));
decrementByTenButton.addEventListener("click", () => store.dispatch(decrementByTenAction));
resetButton.addEventListener("click", () => store.dispatch(resetAction));
