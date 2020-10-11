import { map } from 'lodash';
import { createSelector } from '@ngrx/store';

import { adapter, ApplicationState, todosFeatureKey, SliceState } from './todos.reducer';
import { ITEM_STATUS } from './todos.models';

const {
  selectIds, // => [200, 123, 300]
  selectEntities, // => {
  //   123: { id: 123, title: 'but milk'},
  //   200: { id: 200, title: 'read book 22' },
  //   300: { id: 300, title: 'imba' },
  // },
  selectAll, // => [{ id: 200, title: 'read book 22' }, ...]
  // selectTotal,
} = adapter.getSelectors();

const selectFeature = (state: ApplicationState) => {
  return state[todosFeatureKey];
};

export const selectTodosIds = createSelector(
  selectFeature,
  (sliceState) => [] // TODO
);

// TODO export const selectTodosEntities

// TODO export const selectTodosAll

// TODO export const selectTodosIsFetchingMany

export const selectIsFetchingManyTodos = createSelector(
  selectFeature,
  (state: SliceState) => state.isFetchingMany,
);

// TODO export const selectTodosIsUpdating

// TODO export const selectTodosIsEditing

// TODO export const selectTodosStatuses
