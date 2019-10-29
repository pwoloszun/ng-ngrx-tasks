import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  IncrementCounter = '[Counter] IncrementCounter',
  DecrementCounter = '[Counter] DecrementCounter',
  ResetCounter = '[Counter] ResetCounter',
}

export class IncrementCounter implements Action {
  readonly type = CounterActionTypes.IncrementCounter;

  constructor(public incBy: number, public timestamp = Date.now()
  ) {
  }
}

// TODO DecrementCounter

// TODO ResetCounter

export type CounterActions = IncrementCounter;
  // | DecrementCounter
  // | ResetCounter;
