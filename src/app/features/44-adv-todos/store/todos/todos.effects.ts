import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { concat, EMPTY, of } from 'rxjs';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';

import { Todo, TodosService } from '@core/api/todos.service';

import * as actions from './todos.actions';
import { ApplicationState } from './todos.reducer';

@Injectable()
export class TodosEffects {

  // loadManyTodos$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(actions.loadManyTodosRequest),
  //     // TODO
  //   );
  // });

  // TODO fetch data: this.todosService.getAll() => Observable<Todo[]>
  // TODO dispatch action: loadManyTodosSuccess

  // TODO
  // deleteSingleTodo$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(...),
  //     // TODO
  //   );
  // });

  // TODO
  // optimisticUpdateSingleTodo$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(...),
  //     // TODO
  //   );
  // });

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private todosService: TodosService,
  ) {

  }

}
