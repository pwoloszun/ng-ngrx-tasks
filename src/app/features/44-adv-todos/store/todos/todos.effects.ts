import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, of } from 'rxjs';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';

import { Todo, TodosService } from '../../../../core/api/todos.service';

import * as actions from './todos.actions';
import { ApplicationState } from './todos.reducer';

@Injectable()
export class TodosEffects {

  @Effect()
  loadManyTodos$ = this.actions$.pipe(
    ofType(actions.TodosActionTypes.LoadManyTodosRequest),
    mergeMap((action) => {
      return this.todosService.getAll();
    }),
    map((todos) => {
      return actions.loadManyTodosSuccess({ todos });
    })
  );

  @Effect()
  deleteSingleTodo$ = this.actions$.pipe(
    ofType(actions.TodosActionTypes.DeleteSingleTodoRequest),
    mergeMap((action) => {
      const { id } = action;
      return this.todosService.remove({ id, title: '' });
    }),
    map((id: number) => {
      return actions.deleteSingleTodoSuccess({ id });
    })
  );

  @Effect()
  optimisticUpdateSingleTodo$ = this.actions$.pipe(
    ofType(actions.TodosActionTypes.OptimisticUpdateSingleTodoRequest),
    // end editing todo
    tap((action) => {
      const { todoUpdate } = action;
      const { id } = todoUpdate;
      this.store$.dispatch(actions.endEditSingleTodo({ id }));
    }),
    mergeMap((action) => {
      const { todoUpdate } = action;
      const { id, changes } = todoUpdate;
      return this.todosService.update(id, changes);
    }),
    map((todo: Todo) => {
      const todoUpdate = {
        id: todo.id,
        changes: todo,
      };
      return actions.optimisticUpdateSingleTodoSuccess({ todoUpdate });
    }),
  );

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private todosService: TodosService,
  ) {
  }

}
