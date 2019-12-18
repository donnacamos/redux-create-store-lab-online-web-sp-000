// write your createStore function here
export default function createStore(reducer) {
  let state

  function getState() {
    return state
  }

  function dispatch(action){
    state = reducer(state, action)
  }

  dispatch({type: "@@INIT"})

  return {
    getState,
    dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}


function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}
// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch
