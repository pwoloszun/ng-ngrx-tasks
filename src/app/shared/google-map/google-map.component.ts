import {
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ApplicationRef,
} from '@angular/core';

import { SimpleGMap } from './simple-gmap';
import { Marker } from './marker';
import { LatLng } from './lat-lng';

// TODO 1a: @ViewChild('xxx', { static: false }) myEl: ElementRef;
// TODO 1b: this.gmap = new SimpleGMap(this.myEl.nativeElement);

// TODO 2a: const marker: Marker = this.gmap.createMarker(marker);
// TODO 2b: ngOnChanges(changes: SimpleChanges)

// TODO 3: marker.on('click', function(obj: LatLng) { ... })

@Component({
  selector: 'nts-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
}
