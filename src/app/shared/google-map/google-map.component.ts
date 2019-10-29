import {
  Component,
  EventEmitter,
  AfterViewInit, OnChanges, SimpleChanges,
  Input, Output, ViewChild, ElementRef,
  ApplicationRef,
} from '@angular/core';

import { SimpleGMap } from './simple-gmap';
import { Marker } from './marker';
import { LatLng } from './lat-lng';

@Component({
  selector: 'nts-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements AfterViewInit, OnChanges {
  @Input() selected: LatLng;
  @Input() geoObjects: LatLng[];
  @Output() markerClick = new EventEmitter<LatLng>();
  @ViewChild('mapCont', { static: false }) mapContainer: ElementRef;

  private gmap: SimpleGMap;
  private gMarkers: Marker[] = [];

  constructor(private appRef: ApplicationRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected) {
      this.highlightSelected();
    } else if (changes.geoObjects) {
      this.renderMarkers();
    }
  }

  ngAfterViewInit() {
    this.gmap = new SimpleGMap(this.mapContainer.nativeElement);
    if (this.geoObjects) {
      this.renderMarkers();
    }
  }

  private renderMarkers() {
    this.gMarkers = this.geoObjects.map((marker) => {
      const gMarker: Marker = this.gmap.createMarker(marker);
      gMarker.on('click', (obj: LatLng) => {
        this.markerClick.emit(obj);
        this.appRef.tick();
      });
      return gMarker;
    });
    this.highlightSelected();
  }

  private highlightSelected() {
    this.gMarkers.forEach((gMarker) => {
      const isHighlighted: boolean = gMarker.matches(this.selected);
      gMarker.toggleHighlight(isHighlighted);
    });
  }
}
