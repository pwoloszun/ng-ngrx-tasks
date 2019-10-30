import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { createStore } from '../../../../../../test/utils/create-store';

import {
  reducer,
  actions,
  ApplicationState,
  asyncCounterRefactoredFeatureKey,
  selectors,
  effects,
} from '../index';

function createAsyncRefactoredCounterStore() {
  return createStore<ApplicationState>({
    [asyncCounterRefactoredFeatureKey]: reducer,
  }, [effects.AsyncCounterRefactoredEffects]);
}

describe('AsyncCounterRefactored Feature', () => {
  describe('initial value', () => {
    it('should set initial value to 0', (done) => {
      const store = createAsyncRefactoredCounterStore();

      const counterValue$ = store.pipe(
        select(selectors.selectAsyncCounterRefactoredValue)
      );

      const expectedValue = -100;
      counterValue$.subscribe((value) => {
        expect(value).toEqual(expectedValue);
        done();
      });
    });

    xit('should set initial updatedAt to null', (done) => {
    });
  });

  describe('async increment data flow', () => {
    xit('should increment value', (done) => {
      // const store = createAsyncRefactoredCounterStore();
      //
      // const incBy = 7;
      // const expectedValues = [
      //   [-100, false],
      //   [-100, true],
      //   [-100 + incBy, false]
      // ];

    });

    xit('should decrement value and update updatedAt', (done) => {
      // TODO
    });

  });
});
