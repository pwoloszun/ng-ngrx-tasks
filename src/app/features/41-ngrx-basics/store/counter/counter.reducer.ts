import { produce, Draft } from 'immer';
import { createReducer, on, Action } from '@ngrx/store';

import {
  counterInc,
} from './counter.actions';

export const counterFeatureKey = 'counter';

// state shape
export interface State {
  value: number;
  updatedAt: number;
}

export const initialState: State = {
  value: 997,
  updatedAt: null,
};

const reducerCounter = createReducer(
  initialState,

  on(counterInc, (state: State, action) => {
    const { incBy } = action;
    return {
      value: state.value + incBy,
      updatedAt: 12333444
    };
  }),

);

export function reducer(state: (State | undefined) = initialState, action: Action): State {
  return reducerCounter(state, action);
}

// App SLICE state
export interface ApplicationState {
  [counterFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}
