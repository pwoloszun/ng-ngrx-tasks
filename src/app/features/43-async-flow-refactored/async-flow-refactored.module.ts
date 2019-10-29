import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { AsyncFlowRefactoredRoutingModule } from './async-flow-refactored-routing.module';
import { AsyncCounterRefactoredComponent } from './containers/async-counter-refactored/async-counter-refactored.component';
import { AsyncFlowRefactoredComponent } from './components/async-flow-refactored/async-flow-refactored.component';
import * as fromAsyncCounterRefactored from './store/asyncCounterRefactored/async-counter-refactored.reducer';
import { AsyncCounterRefactoredEffects } from './store/asyncCounterRefactored/async-counter-refactored.effects';

@NgModule({
  declarations: [AsyncCounterRefactoredComponent, AsyncFlowRefactoredComponent],
  imports: [
    CommonModule,
    SharedModule,
    // feature specific
    AsyncFlowRefactoredRoutingModule,
    StoreModule.forFeature(fromAsyncCounterRefactored.asyncCounterRefactoredFeatureKey, fromAsyncCounterRefactored.reducer),
    EffectsModule.forFeature([AsyncCounterRefactoredEffects])
  ]
})
export class AsyncFlowRefactoredModule {
}
