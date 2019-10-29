import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { delay, map, withLatestFrom, switchMap } from 'rxjs/operators';

import * as actions from './async-counter.actions';
import * as selectors from './async-counter.selectors';
import { ApplicationState } from './async-counter.reducer';

const DELAY_IN_MS = 1800;

@Injectable()
export class AsyncCounterEffects {

  private asyncCounterValue$ = this.store$.pipe(
    select(selectors.selectAsyncCounterValue),
  );

  @Effect()
  incrementAsyncCounter$ = this.actions$.pipe(
    ofType(actions.AsyncCounterActionTypes.IncrementAsyncCounterRequest),
    delay(DELAY_IN_MS),
    // withLatestFrom(this.asyncCounterValue$),
    // TODO
  );

  // TODO
  // @Effect()
  // decrementAsyncCounter$

  // TODO
  // @Effect()
  // resetAsyncCounter$

  constructor(
    private actions$: Actions<actions.AsyncCounterActions>,
    private store$: Store<ApplicationState>,
  ) {
  }

}
