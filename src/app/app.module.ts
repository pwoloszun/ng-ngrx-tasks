import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';

import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';

import { CoreModule } from './core/core.module';

// eager-loaded features
import { DashboardModule } from './features/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ngrx reducers
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    // ngrx dev tools
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // ngrx effects
    EffectsModule.forRoot([AppEffects]),
    // ngrx router
    StoreRouterConnectingModule.forRoot(),
    // ngrx entity data
    EntityDataModule,
    // core
    CoreModule,
    SharedModule,
    // eager-loaded features
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
