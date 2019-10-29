import { produce, Draft } from 'immer';

import { CounterActions, CounterActionTypes } from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  value: number;
  updatedAt: number;
}

export const initialState: State = {
  value: 0,
  updatedAt: null,
};

// App STATE
export interface ApplicationState {
  [counterFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}

export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {
    // TODO
    // case CounterActionTypes.IncrementCounter: {
    //   return state;
    // }
    // case CounterActionTypes.DecrementCounter: {
    //   return state;
    // }
    // case CounterActionTypes.ResetCounter: {
    //   return state;
    // }
    default:
      return state;
  }
}
