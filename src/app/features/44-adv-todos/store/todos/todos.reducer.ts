import { produce, Draft } from 'immer';
import { Action, ActionCreator, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as actions from './todos.actions';
import { Todo } from './todos.models';

export const todosFeatureKey = 'todosFeature';

export interface State extends EntityState<Todo> {
  // additional entities state properties
  isFetchingMany: boolean;
  isUpdating: { [id: number]: boolean };
  isRemoving: { [id: number]: boolean };
  isFetching: { [id: number]: boolean };

  isEditing: { [id: number]: boolean };
}

// App STATE
export interface ApplicationState {
  [todosFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  isFetchingMany: false,
  isUpdating: {},
  isRemoving: {},
  isFetching: {},

  isEditing: {},
});

const todosReducer = createReducer(
  initialState,

  on(actions.loadManyTodosRequest, (state) => {
    return produce(state, (draftState: Draft<State>) => {
      draftState.isFetchingMany = true;
    });
  }),

  // TODO
);

export function reducer(state: State | undefined, action: Action): State {
  return todosReducer(state, action);
}
