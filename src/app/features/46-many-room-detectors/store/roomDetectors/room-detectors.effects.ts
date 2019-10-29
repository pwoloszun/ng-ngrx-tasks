import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, interval, of, race } from 'rxjs';
import { mergeMap, map, takeUntil, filter, withLatestFrom } from 'rxjs/operators';

import { RoomTemperatureApiService } from '../../../../core/api/room-temperature-api.service';

import * as actions from './room-detectors.actions';
import * as selectors from './room-detectors.selectors';
import { RoomDetector } from './room-detectors.models';
import { ApplicationState } from './room-detectors.reducer';

const SYNC_FRAME_IN_MS = 2600;

function stopSyncingRoom$(id, action$) {
  // TODO later: handle stop ALL rooms tracking

  // TODO later: handle stop single room tracking
}

function fetchRoomTemperature$(roomTemperatureApiService, id) {
  // TODO
}

function syncRoomTemperatureTask$(roomTemperatureApiService, id, action$) {
  // TODO later: mark room as RUNNING

  // TODO: every SYNC_FRAME_IN_MS fetch current temp

  // TODO: take until stopSyncingRoom$
}

@Injectable()
export class RoomDetectorsEffects {
  private isRunning$ = this.store$.pipe(
    select(selectors.selectRoomDetectorsIsRunning),
  );

  // TODO
  // @Effect()
  // loadManyRoomDetectors$

  // TODO
  @Effect()
  startSingleRoomTracking$ = this.actions$.pipe(
    ofType(actions.RoomDetectorsActionTypes.StartSingleRoomTrackingRequest),
    // TODO later: check if not already running

    // TODO: run syncing BG task: syncRoomTemperatureTask$
  );

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private roomTemperatureApiService: RoomTemperatureApiService,
  ) {
  }

}
