import { produce, Draft } from 'immer';
import { createReducer, on, Action } from '@ngrx/store';

import {
  counterInc,
} from './counter.actions';

export const counterFeatureKey = 'counter'; // state slice ID

// state shape
export interface SliceState {
  value: number;
  updatedAt: number | null;
}

export const initialState: SliceState = {
  value: 300,
  updatedAt: null,
};

const reducerCounter = createReducer(
  initialState,

  on(counterInc, (state: SliceState, action) => {
    const { incBy } = action;
    return {
      value: state.value + incBy,
      updatedAt: 12333444
    };
  }),

);

export function reducer(state: (SliceState | undefined) = initialState, action: Action): SliceState {
  return reducerCounter(state, action);
}

// App SLICE state
export interface ApplicationState {
  [counterFeatureKey]: SliceState; // IMPORTANT: prop name must equal featureName
}
