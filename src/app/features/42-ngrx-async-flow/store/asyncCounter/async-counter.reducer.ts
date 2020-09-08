import { Draft, produce } from 'immer';
import { createReducer, on } from '@ngrx/store';

import { AsyncCounterActionTypes, asyncCounterIncReq, asyncCounterIncSuccess } from './async-counter.actions';

export const asyncCounterFeatureKey = 'asyncCounter';

export interface State {
  asyncValue: number;
  isLoading: boolean;
}

export const initialState: State = {
  asyncValue: 100,
  isLoading: false,
};



const asyncCounterReducer = createReducer(
  initialState,

  on(asyncCounterIncReq, (state: State, action) => {
    return {
      asyncValue: state.asyncValue,
      isLoading: true
    };
  }),

  // TODO
  // on(asyncCounterIncSuccess, (state: State, action) => {
  //   return {};
  // })


);

export function reducer(state = initialState, action: AsyncCounterActions): State {
  return asyncCounterReducer(state, action);
}

// App slice STATE
export interface ApplicationState {
  [asyncCounterFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}
