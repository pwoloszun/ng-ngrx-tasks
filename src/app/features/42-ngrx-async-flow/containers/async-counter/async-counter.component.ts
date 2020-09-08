import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectors, actions } from '../../store/asyncCounter';
import { of } from "rxjs";
import { selectAsyncCounterValue, selectAsyncCounterIsLoading } from '../../store/asyncCounter/async-counter.selectors';
import { asyncCounterIncReq } from '../../store/asyncCounter/async-counter.actions';

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent {

  // TODO
  value$ = this.store.pipe(
    select(selectAsyncCounterValue)
  );
  isLoading$ = this.store.pipe(
    select(selectAsyncCounterIsLoading)
  );

  constructor(private store: Store<any>) {
  }

  increment() {
    const action = asyncCounterIncReq({ incByReq: 9 });
    this.store.dispatch(action);
  }

  decrement() {
    // TODO
  }

  reset() {
    // TODO
  }

}
