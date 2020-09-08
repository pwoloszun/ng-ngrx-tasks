import { createAction, props } from '@ngrx/store';


export enum CounterActionTypes {
  IncrementCounter = '[Counter] IncrementCounter',
  DecrementCounter = '[Counter] DecrementCounter',
  ResetCounter = '[Counter] ResetCounter',
}

export const counterInc = createAction(
  CounterActionTypes.IncrementCounter,
  props<{ incBy: number }>()
);

// TODO DecrementCounter

// TODO ResetCounter
