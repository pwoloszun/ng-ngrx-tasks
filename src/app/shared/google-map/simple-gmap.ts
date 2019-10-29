import { Marker } from './marker';

const google: any = window['google'];
if (!google) {
  throw new Error('Google Maps not available');
}

export class SimpleGMap {

  private _map: any;
  private _markers: any[];
  private _latLngs: any[];

  constructor(element: HTMLElement) {
    let center = new google.maps.LatLng(52.14, 21.0);
    this._map = new google.maps.Map(element, {
      center: center,
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

  //TODO
  /*
   fitMarkerBounds() {
   let lats = _(this._latLngs).pluck("lat");
   let lngs = _(this._latLngs).pluck("lng");
   let south = _(lats).min();
   let north = _(lats).max();
   let east = _(lngs).max();
   let west = _(lats).min();
   let bounds = new gm.LatLngBounds(new gm.LatLng(south, west), new gm.LatLng(north, east));
   this._map.fitBounds(bounds);
   }
   */

}
