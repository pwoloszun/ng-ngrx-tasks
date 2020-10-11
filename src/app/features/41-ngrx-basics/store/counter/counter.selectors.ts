import { createSelector } from '@ngrx/store';

import { ApplicationState, SliceState, counterFeatureKey } from './counter.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[counterFeatureKey];
};

export const selectCounterValue = (state: ApplicationState) => {
  return -997; // TODO
};


// TODO
// export const selectCounterSquareValue = null;

// TODO
// export const selectCounterUpdatedAt = null;
