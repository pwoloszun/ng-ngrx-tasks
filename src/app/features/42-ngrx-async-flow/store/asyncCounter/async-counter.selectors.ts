import { createSelector } from '@ngrx/store';

import { ApplicationState, State, asyncCounterFeatureKey } from './async-counter.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[asyncCounterFeatureKey];
};

// TODO
export const selectAsyncCounterValue = (state: State) => {
  return -123;
};

// TODO
// export const selectAsyncCounterIsLoading
