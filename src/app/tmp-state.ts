// import { TODOS_DATA } from "./features/04-todos/fake-data/todos-data";

// const sliceState = {
//   isLoading: false,
//   todos: [
//     { id: 123, title: 'but milk', status: { isRemoving: true, isEditing: false } },
//     { id: 200, title: 'read book', status: { isRemoving: true, isEditing: false } },
//     { id: 300, title: 'batman', status: { isRemoving: true, isEditing: false } }
//   ]
// };


// enum TodoStatus {
//   REMOVING = 'rem',
//   EDITING = 'edit',
// }

const sliceState2 = { // inside NGRX Store
  // domain/entities state
  todos: {
    entities: {
      123: { id: 123, title: 'but milk' },
      200: { id: 200, title: 'read book 22' },
      300: { id: 300, title: 'imba' },
    },
    ids: [200, 123, 300]
  },

  // feature logic state
  isLoading: false,
  todoStatuses: {
    123: TodoStatus.REMOVING,
    200: TodoStatus.EDITING,
  },
};

// const selectTodo = function (state, id) {
//   return state.todos[id];
// }

// const selectTodoStatus = function (state, id) {
//   return state.todoStatuses[id];
// }

// const selectTodoWithStatus = function (state, id) {
//   const todo = selectTodo(state, id);
//   const status = selectTodoStatus(state, id);
//   return { ...todo, status };
// }




// function todosReducer(state, action) {

//   const entitiesState = entitiesReducer(state, action);
//   const featureState = featureReducer(state, action);

//   return {
//     ...entitiesState,
//     ...featureState
//   };
// }











// // selector
