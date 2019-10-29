import { createSelector } from '@ngrx/store';

import { ApplicationState, State, asyncCounterRefactoredFeatureKey } from './async-counter-refactored.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[asyncCounterRefactoredFeatureKey];
};

export const selectAsyncCounterRefactoredValue = createSelector(
  selectFeature,
  (state: State) => {
    return state.valueRefactored;
  }
);

// TODO export const selectAsyncCounterRefactoredIsLoading
