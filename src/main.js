const store = require("./redux/store");
const ACTIONS = require("./redux/action");

store.subscribe(updateView);

let incButton = document.getElementById("inc-button");
let decButton = document.getElementById("dec-button");
let view = document.getElementById("view");

updateView(); // set initial value

incButton.onclick = renderInc;
decButton.onclick = renderDec;

function renderInc() {
  store.dispatch({ type: ACTIONS.INCREMENT, payload: {} });
}

function renderDec() {
  store.dispatch({ type: ACTIONS.DECREMENT, payload: {} });
}

function updateView() {
  let state = store.getState();
  view.textContent = state;
}
