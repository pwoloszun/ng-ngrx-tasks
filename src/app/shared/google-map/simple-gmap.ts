import { Marker } from './marker';
import { google } from './google.module';

if (!google) {
  throw new Error('Google Maps not available');
}

export class SimpleGMap {

  private _map: any;
  private _markers: any[];
  private _latLngs: any[];

  constructor(element: HTMLElement) {
    const center = new google.maps.LatLng(52.14, 21.0);
    this._map = new google.maps.Map(element, {
      center,
      zoom: 6
    });
    this._markers = [];
    this._latLngs = [];
  }

  createMarker(object: any): Marker {
    const latLng: any = new google.maps.LatLng(object.lat, object.lng);
    this._latLngs.push(latLng);
    const marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      title: object.title
    });
    this._markers.push(marker);
    return new Marker(marker, object);
  }
}
