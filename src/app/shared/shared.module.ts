import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { DataTableComponent } from './data-table/data-table.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { CounterComponent } from './counter/counter.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
  ],
  declarations: [
    DataTableComponent,
    GoogleMapComponent,
    CounterComponent,
    ErrorModalComponent,
  ],
  exports: [
    CustomMaterialModule,
    // components
    DataTableComponent,
    GoogleMapComponent,
    CounterComponent,
    ErrorModalComponent,
  ],
  entryComponents: [
    ErrorModalComponent,
  ],
})
export class SharedModule {
}
