const HIGHLIGHTED_ICON = 'assets/marker-icon-2x.png';

export class Marker {
  private _marker: any;
  private _object: any;

  constructor(googleMarker: any, object: any) {
    this._marker = googleMarker;
    this._object = object;
  }

  on(eventName: string, listenerFn: Function) {
    this._marker.addListener(eventName, () => {
      listenerFn.call(this._marker, this._object, this);
    });
  }

  toggleHighlight(isHighlighted: boolean) {
    this._marker.setIcon(isHighlighted ? HIGHLIGHTED_ICON : null);
  }

  matches(object: any) {
    return this._object === object;
  }
}
