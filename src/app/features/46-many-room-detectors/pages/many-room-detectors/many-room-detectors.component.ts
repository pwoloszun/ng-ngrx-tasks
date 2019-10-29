import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { actions, ApplicationState, selectors } from '../../store/roomDetectors';

@Component({
  selector: 'nts-many-room-detectors',
  templateUrl: './many-room-detectors.component.html',
  styleUrls: ['./many-room-detectors.component.css']
})
export class ManyRoomDetectorsComponent implements OnInit {

  roomDetectors$ = of([]);
  isManyLoading$ = of(true);

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    // TODO load room detectors
  }

  handleStart(id: number) {
    // TODO start single room tracking
  }

  handleStop(id: number) {
    // TODO stop single room tracking
  }

  handleStopAll() {
    // TODO stop ALL rooms tracking
  }
}
