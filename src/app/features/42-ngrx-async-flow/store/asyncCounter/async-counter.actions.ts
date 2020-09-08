import { Action, props, createAction } from '@ngrx/store';

export enum AsyncCounterActionTypes {
  IncrementAsyncCounterRequest = '[AsyncCounter] IncrementAsyncCounterRequest',
  IncrementAsyncCounterSuccess = '[AsyncCounter] IncrementAsyncCounterSuccess',
  IncrementAsyncCounterError = '[AsyncCounter] IncrementAsyncCounterError',

  DecrementAsyncCounterRequest = '[AsyncCounter] DecrementAsyncCounterRequest',
  DecrementAsyncCounterSuccess = '[AsyncCounter] DecrementAsyncCounterSuccess',

  ResetAsyncCounterRequest = '[AsyncCounter] ResetAsyncCounterRequest',
  ResetAsyncCounterSuccess = '[AsyncCounter] ResetAsyncCounterSuccess',
}

export const asyncCounterIncReq = createAction(
  AsyncCounterActionTypes.IncrementAsyncCounterRequest,
  props<{ incByReq: number }>()
);

export const asyncCounterIncSuccess = createAction(
  AsyncCounterActionTypes.IncrementAsyncCounterSuccess,
  props<{ incBySucc: number }>()
);
