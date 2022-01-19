import { createAction, props } from '@ngrx/store';


export enum CounterActionTypes {
  IncrementCounter = '[Counter] IncrementCounter',

  MuIncrementCounter = '[MyCounter] MyIncrementCounter',

  DecrementCounter = '[Counter] DecrementCounter',
  ResetCounter = '[Counter] ResetCounter',
}

export const counterInc = createAction(
  CounterActionTypes.IncrementCounter,
  props<{ incBy: number }>()
);


export const myIncrement = createAction(
  CounterActionTypes.MuIncrementCounter,
  props<{ incrementBy: number; }>()
);

// TODO DecrementCounter

// TODO ResetCounter
