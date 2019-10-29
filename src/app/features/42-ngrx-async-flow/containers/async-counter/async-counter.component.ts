import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectors, actions } from '../../store/asyncCounter';
import { of } from "rxjs";

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent {

  // TODO
  value$ = of(123);
  isLoading$ = of(true);

  constructor(private store: Store<any>) {
  }

  increment() {
    // TODO
  }

  decrement() {
    // TODO
  }

  reset() {
    // TODO
  }

}
