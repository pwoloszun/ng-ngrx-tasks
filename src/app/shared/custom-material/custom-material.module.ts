import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule, MatCheckboxModule, MatSnackBarModule,
} from '@angular/material';

const MAT_COMPONENTS = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...MAT_COMPONENTS,
  ],
  exports: [
    FlexLayoutModule,
    ...MAT_COMPONENTS,
  ],
})
export class CustomMaterialModule {
}
