import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new Map('map').setView([41.24043, 1.7257], 20);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const markerItem = marker([41.24043, 1.7257])
      .addTo(map)
      .bindPopup('CrossFit VNG <br> Carrer del guix 8');

    map.fitBounds([[markerItem.getLatLng().lat, markerItem.getLatLng().lng]]);
  }
}
