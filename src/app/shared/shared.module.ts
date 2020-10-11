import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { CounterComponent } from './counter/counter.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
  ],
  declarations: [
    CounterComponent,
    ErrorModalComponent,
  ],
  exports: [
    CustomMaterialModule,
    // components
    CounterComponent,
    ErrorModalComponent,
  ],
  entryComponents: [
    ErrorModalComponent,
  ],
})
export class SharedModule {
}
