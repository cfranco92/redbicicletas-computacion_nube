import * as L from "leaflet";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MarkerService {
  constructor() {}

  makeMarkers(map: any, lat: number, lon: number): void {
    const marker = L.marker([lat, lon]);
    marker.addTo(map);
  }
}
