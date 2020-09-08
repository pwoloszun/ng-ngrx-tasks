import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store, Action } from '@ngrx/store';
import { of, EMPTY } from 'rxjs';
import { delay, map, withLatestFrom, switchMap } from 'rxjs/operators';

import * as actions from './async-counter.actions';
import * as selectors from './async-counter.selectors';
import { ApplicationState } from './async-counter.reducer';
import { asyncCounterIncSuccess } from './async-counter.actions';

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
    
    // TODO
  );

  // TODO
  // @Effect()
  // decrementAsyncCounter$

  // TODO
  // @Effect()
  // resetAsyncCounter$

  constructor(
    private actions$: Actions<Action>,
    private store$: Store<ApplicationState>,
  ) {
  }

}
