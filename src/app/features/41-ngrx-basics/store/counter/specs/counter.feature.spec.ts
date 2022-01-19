import { select } from '@ngrx/store';
// import { map } from 'rxjs/operators';

// import { createStore } from '../../../../../../test/utils/create-store';

// import { reducer, counterFeatureKey, selectors, ApplicationState, actions } from '../index';

// describe('Counter Feature', () => {
//   describe('initial value', () => {
//     it('should set initial value to 0', (done) => {
//       const store = createStore({
//         [counterFeatureKey]: reducer,
//       });

//       const counterValue$ = store.pipe(
//         select(selectors.selectCounterValue)
//       );

//       const expectedValue = 0;
//       counterValue$.subscribe((value) => {
//         expect(value).toEqual(expectedValue);
//         done();
//       });
//     });

//     xit('should set initial updatedAt to null', (done) => {
//     });
//   });

//   describe('IncrementCounter action', () => {
//     xit('should increment value and update updatedAt', (done) => {
//       const store = createStore({
//         [counterFeatureKey]: reducer,
//       });

//       const expectedValue = 17;
//       const expectedUpdatedAt = 12345678;

//       const action = new actions.IncrementCounter(expectedValue, expectedUpdatedAt);
//       store.dispatch(action);

//       store.pipe(
//         map((state: any) => {
//           return [
//             selectors.selectCounterValue(state),
//             // selectors.selectCounterUpdatedAt(state), // TODO
//           ];
//         }),
//       ).subscribe(([value, updatedAt]) => {
//         expect(value).toEqual(expectedValue);
//         // expect(updatedAt).toEqual(expectedUpdatedAt); // TODO
//         done();
//       });

//     });

//     xit('should decrement value and update updatedAt', (done) => {
//       // TODO
//     });

//   });
// });
