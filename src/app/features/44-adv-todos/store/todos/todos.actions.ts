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

// TODO export const loadManyTodosSuccess

// TODO export const deleteSingleTodoRequest

// TODO export const deleteSingleTodoSuccess

// TODO export const optimisticUpdateSingleTodoRequest

// TODO export const optimisticUpdateSingleTodoSuccess

// TODO startEditSingleTodo

// TODO export const endEditSingleTodo
