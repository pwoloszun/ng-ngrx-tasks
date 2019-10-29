import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from './api/api.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ApiModule,
  ],
  declarations: [
    PageNotFoundComponent,
    MainNavComponent,
  ],
  exports: [
    RouterModule,
    FormsModule,
    // components
    PageNotFoundComponent,
    MainNavComponent,
  ],
  providers: [],
})
export class CoreModule {
}
