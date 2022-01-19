import { createSelector } from '@ngrx/store';

import { ApplicationState, SliceState, counterFeatureKey } from './counter.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[counterFeatureKey];
};

export const selectCounterValue = (state: ApplicationState) => {
  return state.counter.value;
};


// TODO
// export const selectCounterSquareValue = null;

// TODO
// export const selectCounterUpdatedAt = null;
