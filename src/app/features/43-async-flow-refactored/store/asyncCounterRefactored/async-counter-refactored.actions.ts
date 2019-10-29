import { Action } from '@ngrx/store';

export enum AsyncCounterRefactoredActionTypes {
  IncrementAsyncCounterRefactoredRequest = '[AsyncCounterRefactored] IncrementAsyncCounterRefactoredRequest',
  IncrementAsyncCounterRefactoredSuccess = '[AsyncCounterRefactored] IncrementAsyncCounterRefactoredSuccess',

  DecrementAsyncCounterRefactoredRequest = '[AsyncCounterRefactored] DecrementAsyncCounterRefactoredRequest',
  DecrementAsyncCounterRefactoredSuccess = '[AsyncCounterRefactored] DecrementAsyncCounterRefactoredSuccess',

  ResetAsyncCounterRefactoredRequest = '[AsyncCounterRefactored] ResetAsyncCounterRefactoredRequest',
  ResetAsyncCounterRefactoredSuccess = '[AsyncCounterRefactored] ResetAsyncCounterRefactoredSuccess',

}

import { createAction, props } from '@ngrx/store';

export const incrementRefactoredRequest = createAction(
  AsyncCounterRefactoredActionTypes.IncrementAsyncCounterRefactoredRequest,
  props<{ incBy: number }>()
);

// TODO export const incrementRefactoredSuccess

// TODO export const resetRefactoredRequest

// TODO export const resetRefactoredSuccess
