import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { selectors, actions } from '../../store/asyncCounter';

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent {

  // TODO
  value$ = of(12345);
  isLoading$ = of(false);

  constructor(private store: Store<any>) {
  }

  incrementHandler() {
    const action = actions.asyncCounterIncReq({ incByReq: 9 });
    this.store.dispatch(action);
  }

  decrementHandler() {
    // TODO
  }

  resetHandler() {
    // TODO
  }

}
