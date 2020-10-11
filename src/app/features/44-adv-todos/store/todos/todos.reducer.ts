import { produce, Draft } from 'immer';
import { Action, ActionCreator, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as actions from './todos.actions';
import { Todo } from './todos.models';

export const todosFeatureKey = 'todosFeature';

interface TodoEntityState extends EntityState<Todo> {
}

export enum TodoStatus {
  Persisted = 'PERSISTED',
  Saving = 'SAVING',
  Removing = 'REMOVING',
  Editing = 'EDITING',
}

// TODO domain/entities state
// TODO feature/app logic state

export interface SliceState {
  // TODO
  isFetchingMany: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
// TODO: adapter.getInitialState({});

const initialState: SliceState = {
  // TODO
  isFetchingMany: false,
};

const todosReducer = createReducer(
  initialState,

  on(actions.loadManyTodosRequest, (state) => {
    return produce(state, (draftState: Draft<SliceState>) => {
      draftState.isFetchingMany = true;
    });
  }),

  // TODO
);

export function reducer(state: SliceState, action: Action): SliceState {
  return todosReducer(state, action);
}

// App STATE
export interface ApplicationState {
  [todosFeatureKey]: SliceState; // IMPORTANT: prop name must equal featureName
}
