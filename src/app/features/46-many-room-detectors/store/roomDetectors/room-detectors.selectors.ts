import { createSelector } from '@ngrx/store';

import { adapter, ApplicationState, roomDetectorsFeatureKey } from './room-detectors.reducer';

const {
  selectIds,
  selectEntities,
  selectAll,
} = adapter.getSelectors();

const selectFeature = (state: ApplicationState) => {
  return state[roomDetectorsFeatureKey];
};

// TODO export const selectRoomDetectorsIsManyLoading

export const selectRoomDetectorsIsRunning = createSelector(
  selectFeature,
  (state) => state.isRunning,
);

// TODO export const selectRoomDetectorsIds

export const selectRoomDetectorsEntities = createSelector(
  selectFeature,
  selectEntities,
);

// TODO export const selectRoomDetectorsAll
