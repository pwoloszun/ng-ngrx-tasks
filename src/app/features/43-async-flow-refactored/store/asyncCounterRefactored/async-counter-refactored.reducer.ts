import { Action, ActionCreator, createReducer, on } from '@ngrx/store';
import { produce, Draft } from 'immer';

import * as actions from './async-counter-refactored.actions';

export const asyncCounterRefactoredFeatureKey = 'asyncCounterRefactored';

export interface State {
  valueRefactored: number;
  isLoadingRefactored: boolean;
}

export const initialState: State = {
  valueRefactored: -100,
  isLoadingRefactored: false,
};

// App STATE
export interface ApplicationState {
  [asyncCounterRefactoredFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}

const asyncCounterRefactoredReducer = createReducer(
  initialState,
  on(actions.incrementRefactoredRequest,
    (state) => {
      return produce(state, (draftState: Draft<State>) => {
        draftState.isLoadingRefactored = true;
      });
    }
  ),
  // TODO
  // on(actionCreatorFn, (state, action) => nextState)
);

export function reducer(state: State | undefined, action: Action): State {
  return asyncCounterRefactoredReducer(state, action);
}
