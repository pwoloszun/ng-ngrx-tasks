import { map } from 'lodash';
import { createSelector } from '@ngrx/store';

import { adapter, ApplicationState, todosFeatureKey } from './todos.reducer';
import { ITEM_STATUS } from './todos.models';

const {
  selectIds,
  selectEntities,
  selectAll,
  // selectTotal,
} = adapter.getSelectors();

const selectFeature = (state: ApplicationState) => {
  return state[todosFeatureKey];
};

export const selectTodosIds = createSelector(
  selectFeature,
  selectIds,
);

// TODO export const selectTodosEntities

// TODO export const selectTodosAll

// TODO export const selectTodosIsFetchingMany

export const selectTodosIsRemoving = createSelector(
  selectFeature,
  (state) => state.isRemoving,
);

// TODO export const selectTodosIsUpdating

// TODO export const selectTodosIsEditing

// TODO export const selectTodosStatuses
