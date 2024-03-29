import * as L from "leaflet";

import { AfterViewInit, Component, Input } from "@angular/core";

import { MarkerService } from "src/app/core/services/marker/marker.service";

const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements AfterViewInit {
  @Input() myPoints: any[] = [];

  private map: any;

  private initMap(): void {
    this.map = L.map("map", {
      center: [6.231875338799698, -75.61159853102133],
      zoom: 11,
    });

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    this.addMarkers();
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  addMarker(lat: number, long: number) {
    this.markerService.makeMarkers(this.map, lat, long);
  }

  addMarkers() {
    this.myPoints.map((point) => {
      this.addMarker(point.latitud, point.longitud);
    });
  }
}
