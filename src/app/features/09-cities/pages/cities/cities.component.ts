import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LatLng } from '../../../../shared/google-map/lat-lng';

@Component({
  selector: 'nts-cities',
  templateUrl: './cities.component.html',
})
export class CitiesComponent implements OnInit {

  // cities$: Observable<LatLng[]>; // TODO: async version
  selectedCity: LatLng;
  myCities: LatLng[] = [];

  ngOnInit() {
    this.myCities = [
      { title: 'Lublin', lat: 51.15, lng: 22.34 },
      { title: 'Rzeszów', lat: 50.0409, lng: 21.9992 },
      { title: 'Łódź', lat: 51.45, lng: 19.27 },
      { title: 'Kraków', lat: 50.06465, lng: 19.94498 },
      { title: 'Warszawa', lat: 52.14, lng: 21.0 },
      { title: 'Szczecin', lat: 53.25, lng: 14.35 }
    ];
  }

  onPlaceClick(city: any) {
    console.log('google map PAGE click:', city, 'index:', this.myCities.indexOf(city));
  }
}
