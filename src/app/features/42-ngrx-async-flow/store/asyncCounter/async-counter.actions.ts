import { Action } from '@ngrx/store';

export enum AsyncCounterActionTypes {
  IncrementAsyncCounterRequest = '[AsyncCounter] IncrementAsyncCounterRequest',
  IncrementAsyncCounterSuccess = '[AsyncCounter] IncrementAsyncCounterSuccess',

  DecrementAsyncCounterRequest = '[AsyncCounter] DecrementAsyncCounterRequest',
  DecrementAsyncCounterSuccess = '[AsyncCounter] DecrementAsyncCounterSuccess',

  ResetAsyncCounterRequest = '[AsyncCounter] ResetAsyncCounterRequest',
  ResetAsyncCounterSuccess = '[AsyncCounter] ResetAsyncCounterSuccess',
}

export class IncrementAsyncCounterRequest implements Action {
  readonly type = AsyncCounterActionTypes.IncrementAsyncCounterRequest;

  constructor(public incBy: number) {
  }
}

// TODO: IncrementAsyncCounterSuccess

// TODO DecrementAsyncCounterRequest

// TODO DecrementAsyncCounterSuccess

// TODO ResetAsyncCounterRequest

// TODO ResetAsyncCounterSuccess

export type AsyncCounterActions = IncrementAsyncCounterRequest;
  // | IncrementAsyncCounterSuccess
  // | DecrementAsyncCounterRequest
  // | DecrementAsyncCounterSuccess
  // | ResetAsyncCounterRequest
  // | ResetAsyncCounterSuccess;
