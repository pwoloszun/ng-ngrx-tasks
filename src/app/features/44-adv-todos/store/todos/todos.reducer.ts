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
  on(actions.loadManyTodosSuccess, (state, { todos }) => {
    const nextState = produce(state, (draftState: Draft<State>) => {
      draftState.isFetchingMany = false;
    });
    return adapter.addAll(todos, nextState);
  }),

  on(actions.deleteSingleTodoRequest, (state, action) => {
    const { id } = action;
    return produce(state, (draftState: Draft<State>) => {
      draftState.isRemoving[id] = true;
    });
  }),
  on(actions.deleteSingleTodoSuccess, (state, action) => {
    const { id } = action;
    const nextState = produce(state, (draftState: Draft<State>) => {
      draftState.isRemoving[id] = false;
    });
    return adapter.removeOne(id, nextState);
  }),

  on(actions.optimisticUpdateSingleTodoRequest, (state, action) => {
    const { todoUpdate } = action;
    const { id } = todoUpdate;
    const nextState = produce(state, (draftState: Draft<State>) => {
      draftState.isUpdating[id] = true;
    });
    return adapter.updateOne(todoUpdate, nextState);
  }),
  on(actions.optimisticUpdateSingleTodoSuccess, (state, action) => {
    const { todoUpdate } = action;
    const { id } = todoUpdate;
    const nextState = produce(state, (draftState: Draft<State>) => {
      draftState.isUpdating[id] = false;
    });
    return adapter.updateOne(todoUpdate, nextState);
  }),

  on(actions.startEditSingleTodo, (state, { id }) => {
    return produce(state, (draftState: Draft<State>) => {
      draftState.isEditing[id] = true;
    });
  }),
  on(actions.endEditSingleTodo, (state, { id }) => {
    return produce(state, (draftState: Draft<State>) => {
      draftState.isEditing[id] = false;
    });
  }),
);

export function reducer(state: State | undefined, action: Action): State {
  return todosReducer(state, action);
}
