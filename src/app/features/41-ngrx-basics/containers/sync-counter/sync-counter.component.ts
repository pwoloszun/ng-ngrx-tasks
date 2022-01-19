import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {
  actions,
  selectors,
} from '../../store/counter';

@Component({
  selector: 'nts-sync-counter',
  templateUrl: './sync-counter.component.html',
  styleUrls: ['./sync-counter.component.css']
})
export class SyncCounterComponent {

  value$ = this.store.pipe(
    select(selectors.selectCounterValue),
  );

  updatedAt$ = of(1572311630612);
  squareValue$ = of(-997);

  constructor(private store: Store<any>) { }

  incrementHandler() {
    const action = actions.myIncrement({
      incrementBy: 5,
    });
    this.store.dispatch(action);
  }

  decrementHandler() {
    // TODO
  }

  resetHandler() {
    // TODO
  }
}
