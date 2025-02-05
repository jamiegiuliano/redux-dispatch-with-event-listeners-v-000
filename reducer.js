let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
let button = document.getElementById('button');

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

store.dispatch({ type: '@@INIT' });

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
