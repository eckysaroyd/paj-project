import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: maplibregl.Map | undefined;
  deviceID: string | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.deviceID = this.route.snapshot.paramMap.get('id');
    this.initializeMap();

    if (this.deviceID) {
      this.apiService.getDeviceTracking(this.deviceID).subscribe({
        next: (response: any) => {
          const lastPosition = response[0];
          this.addMarker(lastPosition.longitude, lastPosition.latitude);
        },
        error: (error) => {
          console.error('Error fetching device tracking data:', error);
        }
      });
    }
  }

  initializeMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://tiles.stadiamaps.com/styles/outdoors.json',
      center: [0, 0],
      zoom: 2
    });
  }

  addMarker(lng: number, lat: number) {
    if (this.map) {
      new maplibregl.Marker().setLngLat([lng, lat]).addTo(this.map);
      this.map.flyTo({ center: [lng, lat], zoom: 10 });
    }
  }
}
