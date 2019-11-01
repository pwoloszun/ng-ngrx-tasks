import { values } from 'lodash';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';

export function createStore<T>(reducers = {}, effects = [], providers = []) {
  const metaReducers = [];

  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          // strictStateImmutability: true,
          // strictActionImmutability: true,
        }
      }),
      EffectsModule.forRoot(effects),
    ],
    providers: [
      Store,
      Actions,
      ...providers,
    ],
  });

  return TestBed.get<Store<T>>(Store);
}
