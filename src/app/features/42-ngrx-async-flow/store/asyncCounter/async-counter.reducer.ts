import { AsyncCounterActions, AsyncCounterActionTypes } from './async-counter.actions';
import { Draft, produce } from 'immer';

export const asyncCounterFeatureKey = 'asyncCounter';

export interface State {
  asyncValue: number;
  isLoading: boolean;
}

export const initialState: State = {
  asyncValue: 100,
  isLoading: false,
};

// App STATE
export interface ApplicationState {
  [asyncCounterFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}

export function reducer(state = initialState, action: AsyncCounterActions): State {
  switch (action.type) {
    // TODO AsyncCounterActionTypes.DecrementAsyncCounterRequest
    // TODO AsyncCounterActionTypes.ResetAsyncCounterRequest

    case AsyncCounterActionTypes.IncrementAsyncCounterRequest: {
      return produce(state, (draftState: Draft<State>) => {
        draftState.isLoading = true;
      });
    }

    // TODO AsyncCounterActionTypes.IncrementAsyncCounterSuccess
    // TODO AsyncCounterActionTypes.DecrementAsyncCounterSuccess
    // TODO AsyncCounterActionTypes.ResetAsyncCounterSuccess
    default:
      return state;
  }
}
