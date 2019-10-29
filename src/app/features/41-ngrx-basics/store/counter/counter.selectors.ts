import { createSelector } from '@ngrx/store';

import { ApplicationState, State, counterFeatureKey } from './counter.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[counterFeatureKey];
};

// TODO
// export const selectCounterValue = null;

// TODO
// export const selectCounterSquareValue = null;

// TODO
// export const selectCounterUpdatedAt = null;
