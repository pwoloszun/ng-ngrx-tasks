import { createSelector } from '@ngrx/store';

import { ApplicationState, State, counterFeatureKey } from './counter.reducer';

const selectFeature = (state: ApplicationState) => {
  return state[counterFeatureKey];
};

export const selectCounterValue = createSelector(
  selectFeature,
  (state: State) => {
    return state.value;
  }
);

// TODO
// export const selectCounterSquareValue = null;

// TODO
// export const selectCounterUpdatedAt = null;
