import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { selectors, actions } from '../../store/asyncCounterRefactored';

@Component({
  selector: 'nts-async-counter-refactored',
  templateUrl: './async-counter-refactored.component.html',
  styleUrls: ['./async-counter-refactored.component.css']
})
export class AsyncCounterRefactoredComponent {

  value$ = of(997);
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
