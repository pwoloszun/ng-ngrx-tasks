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

export const selectTodosEntities = createSelector(
  selectFeature,
  selectEntities,
);

export const selectTodosAll = createSelector(
  selectFeature,
  selectAll,
);

export const selectTodosIsFetchingMany = createSelector(
  selectFeature,
  (state) => state.isFetchingMany,
);

export const selectTodosIsRemoving = createSelector(
  selectFeature,
  (state) => state.isRemoving,
);

export const selectTodosIsUpdating = createSelector(
  selectFeature,
  (state) => state.isUpdating,
);

export const selectTodosIsEditing = createSelector(
  selectFeature,
  (state) => state.isEditing,
);

export const selectTodosStatuses = createSelector(
  selectTodosIds,
  selectTodosIsEditing,
  selectTodosIsRemoving,
  selectTodosIsUpdating,
  (ids, isEditing, isRemoving, isUdating) => {
    return map(ids, (id: number) => {
      if (isRemoving[id]) {
        return ITEM_STATUS.removing;
      } else if (isEditing[id]) {
        return ITEM_STATUS.editing;
      } else if (isUdating[id]) {
        return ITEM_STATUS.saving;
      } else {
        return ITEM_STATUS.persisted;
      }
    });
  },
);
