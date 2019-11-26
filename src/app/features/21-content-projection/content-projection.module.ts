import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SimpleStreamableContainerComponent } from './components/simple-streamable-container/simple-streamable-container.component';
import { BetterStreamableContainerComponent } from './components/better-streamable-container/better-streamable-container.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    LoaderComponent,
    SimpleStreamableContainerComponent,
    BetterStreamableContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentProjectionRoutingModule,
  ]
})
export class ContentProjectionModule {
}
