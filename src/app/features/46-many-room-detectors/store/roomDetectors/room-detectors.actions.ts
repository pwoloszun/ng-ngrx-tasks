import { createAction, props } from '@ngrx/store';
import { RoomDetector } from './room-detectors.models';
import { Update } from '@ngrx/entity';

export enum RoomDetectorsActionTypes {
  StartSingleRoomTrackingRequest = '[RoomDetectors] StartSingleRoomTrackingRequest',
  StartSingleRoomTrackingSuccess = '[RoomDetectors] StartSingleRoomTrackingSuccess',

  StopSingleRoomTracking = '[RoomDetectors] StopSingleRoomTracking',

  StopAllRoomsTracking = '[RoomDetectors] StopAllRoomsTracking',

  LoadManyRoomDetectorsRequest = '[RoomDetectors] LoadManyRoomDetectorsRequest',
  LoadManyRoomDetectorsSuccess = '[RoomDetectors] LoadManyRoomDetectorsSuccess',

  LoadSingleRoomDetectorRequest = '[RoomDetectors] LoadSingleRoomDetectorRequest',
  LoadSingleRoomDetectorSuccess = '[RoomDetectors] LoadSingleRoomDetectorSuccess',

}

export const startSingleRoomTrackingRequest = createAction(
  RoomDetectorsActionTypes.StartSingleRoomTrackingRequest,
  props<{ id: number }>()
);

// TODO export const startSingleRoomTrackingSuccess

// TODO export const stopSingleRoomTracking

// TODO export const stopAllRoomsTracking

// TODO export const loadSingleRoomDetectorRequest

// TODO export const loadSingleRoomDetectorSuccess

// TODO export const loadManyRoomDetectorsRequest

// TODO export const loadManyRoomDetectorsSuccess
