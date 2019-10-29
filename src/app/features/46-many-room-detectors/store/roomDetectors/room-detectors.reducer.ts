import { produce, Draft } from 'immer';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as actions from './room-detectors.actions';
import { RoomDetector } from './room-detectors.models';

export const roomDetectorsFeatureKey = 'roomDetectors';

export interface State extends EntityState<RoomDetector> {
  isManyLoading: boolean;
  isRunning: { [id: number]: boolean };
}

export interface ApplicationState {
  [roomDetectorsFeatureKey]: State; // IMPORTANT: prop name must equal featureName
}

export const adapter: EntityAdapter<RoomDetector> = createEntityAdapter<RoomDetector>();

export const initialState: State = adapter.getInitialState({
  isManyLoading: false,
  isRunning: {},
});

const roomDetectorsReducer = createReducer(
  initialState,

  // TODO
  // on(actions.someAction, (state, action) => {
  //   return state;
  // }),
);

export function reducer(state: State | undefined, action: Action): State {
  return roomDetectorsReducer(state, action);
}
