import { createSelector } from '@ngrx/store';

import { ApplicationState, State, asyncCounterFeatureKey } from './async-counter.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[asyncCounterFeatureKey];
};

export const selectAsyncCounterValue = createSelector(
  selectFeature,
  (state: State) => {
    return state.asyncValue;
  }
);

// TODO export const selectAsyncCounterIsLoading
