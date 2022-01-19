interface Todo {
  id: number;
  title: string;
  description?: string;
}

enum TodoStatus {
  IS_EDITING = 'IS_EDITING',
  IS_SAVING = 'IS_SAVING',
  IS_REMOVING = 'IS_REMOVING',
  PERSISTED = 'PERSISTED' // default value
}

// data fetched from API
const todosData: Todo[] = [
  { id: 100, title: 'buy milk', },
  { id: 200, title: 'walk the dog', description: 'important' },
  { id: 300, title: 'do them math', },
];


// TODO: designing state shape
// snapshot
const stateSlice = {

  // persisted/entities state
  todos: [
    { id: 100, title: 'buy milk', },
    { id: 200, title: 'walk the dog', description: 'important', },
    { id: 300, title: 'do them math', },
  ],

  // app/feature state
  todoStatuses: {
    100: TodoStatus.IS_EDITING,
    200: TodoStatus.PERSISTED,
    300: TodoStatus.IS_REMOVING,
  },

  isImportant: {
    100: false
  },

  customOrder: [200, 100, 300],

  selectedSort: { sortBy: 'title', asc: true },

};

const selectAllTodosWithStatuses = (stateSlice) => {
  return stateSlice.todos.map((todo) => {
    return {
      ...todo,
      status: stateSlice.todoStatuses[todo.id]
    };
  });
};

// ======
// client code(ReactComponent) - TODO
