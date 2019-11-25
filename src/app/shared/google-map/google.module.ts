let google;
const envs = [
  'test',
  'development' // TODO: uncomment if no internet connection
];

// @ts-ignore
if (envs.includes(process.env.NODE_ENV)) {
  google = {
    maps: {}
  };

  class LatLng {
  }

  class Map {
  }

  class Marker {
    addListener() {
    }

    setIcon() {
    }
  }

  google.maps.LatLng = LatLng;
  google.maps.Map = Map;
  google.maps.Marker = Marker;
} else {
  google = (window as any).google;
}

export { google };
