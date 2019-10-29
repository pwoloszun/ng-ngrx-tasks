import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from './todos.models';

export enum TodosActionTypes {
  LoadManyTodosRequest = '[Todos] LoadManyTodosRequest',
  LoadManyTodosSuccess = '[Todos] LoadManyTodosSuccess',

  DeleteSingleTodoRequest = '[Todos] DeleteSingleTodoRequest',
  DeleteSingleTodoSuccess = '[Todos] DeleteSingleTodoSuccess',

  OptimisticUpdateSingleTodoRequest = '[Todos] OptimisticUpdateSingleTodoRequest',
  OptimisticUpdateSingleTodoSuccess = '[Todos] OptimisticUpdateSingleTodoSuccess',

  StartEditTodo = '[Todos] StartEditTodo',
  EndEditTodo = '[Todos] EndEditTodo',

}

export const loadManyTodosRequest = createAction(
  TodosActionTypes.LoadManyTodosRequest,
);

export const loadManyTodosSuccess = createAction(
  TodosActionTypes.LoadManyTodosSuccess,
  props<{ todos: Todo[] }>()
);

export const deleteSingleTodoRequest = createAction(
  TodosActionTypes.DeleteSingleTodoRequest,
  props<{ id: number }>()
);

export const deleteSingleTodoSuccess = createAction(
  TodosActionTypes.DeleteSingleTodoSuccess,
  props<{ id: number }>()
);

export const optimisticUpdateSingleTodoRequest = createAction(
  TodosActionTypes.OptimisticUpdateSingleTodoRequest,
  props<{ todoUpdate: Update<Todo> }>()
);

export const optimisticUpdateSingleTodoSuccess = createAction(
  TodosActionTypes.OptimisticUpdateSingleTodoSuccess,
  props<{ todoUpdate: Update<Todo> }>()
);

export const startEditSingleTodo = createAction(
  TodosActionTypes.StartEditTodo,
  props<{ id: number }>()
);

export const endEditSingleTodo = createAction(
  TodosActionTypes.EndEditTodo,
  props<{ id: number }>()
);
