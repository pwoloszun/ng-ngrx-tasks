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
    // TODO
  );

  // TODO
  // @Effect()
  // deleteSingleTodo$

  // TODO
  // @Effect()
  // optimisticUpdateSingleTodo$

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private todosService: TodosService,
  ) {
  }

}
