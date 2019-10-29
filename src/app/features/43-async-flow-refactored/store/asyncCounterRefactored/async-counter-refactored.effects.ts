import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as actions from './async-counter-refactored.actions';
import * as selectors from './async-counter-refactored.selectors';
import { ApplicationState } from './async-counter-refactored.reducer';

const DELAY_IN_MS = 600;

@Injectable()
export class AsyncCounterRefactoredEffects {
  private asyncCounterValue$ = this.store$.pipe(
    select(selectors.selectAsyncCounterRefactoredValue),
  );

  @Effect()
  incrementAsyncCounter$ = this.actions$.pipe(
    ofType(actions.AsyncCounterRefactoredActionTypes.IncrementAsyncCounterRefactoredRequest),
    delay(DELAY_IN_MS),
    // withLatestFrom(this.asyncCounterValue$),
    // TODO
  );

  // TODO
  // @Effect()
  // decrementAsyncCounter$

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
  ) {
  }

}
