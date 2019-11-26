import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { RealEstatesApiService } from '../../../core/api/real-estates-api.service';
import { RealEstate } from './real-estate.model';

@Injectable()
export class ManageRealEstatesService {

  // TODO: selected & realEstates
  realEstates$ = of([]); // TODO
  selectedRealEstate$ = of(null);  // TODO

  constructor(private apiService: RealEstatesApiService) {
  }

  fetch() {
    // TODO
  }

  toggleRealEstate(estate: RealEstate) {
    // TODO
  }

}
