import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataApiService } from './data-api.service';
import { TodosService } from './todos.service';
import { RoomTemperatureApiService } from './room-temperature-api.service';
import { FakeApiService } from './fake-api.service';
import { SearchApiService } from './search-api.service';
import { RealEstatesApiService } from './real-estates-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    DataApiService,
    TodosService,
    RoomTemperatureApiService,
    FakeApiService,
    SearchApiService,
    RealEstatesApiService,
  ],
})
export class ApiModule {
}
