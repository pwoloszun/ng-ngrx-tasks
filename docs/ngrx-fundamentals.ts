interface Action { // event
  type: string;
  payload?: any;
}

const action = {
  type: '[CartWidget] addProduct',
  payload: {
    products: [{}]
  }
};


// FSA - Flux Standard Action

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

// design state shape
const state = {
  counter: { // counter state slice
  },

  users: { // users state slice
  },

  todos: [] //state slice
};



// actions
const action2 = {
  type: '[Users] fetch',
  payload: {
    users: [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }]
  }
}; // "event"

store.dispatch(action2);



// reducer(s)
function usersReducer(state, action) {
  switch (action.type) {
    case '[Users] fetch': {
      const nextState = { /*...*/ };
      return nextState;
    }
    case '[Source] Event': {
      const nextState = { /*...*/ };
      return nextState;
    }
    default:
      return state;
  }
}

function counterReducer(state, action) {
  return state;
}


function rootReducer(state, action) {
  const nextUsersState = usersReducer(state.users, action);
  const nextCounterState = counterReducer(state.counter, action);

  return {
    ...state,
    users: nextUsersState,
    counter: nextCounterState,
  };
}



// client code - Components

// Counter component
store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
