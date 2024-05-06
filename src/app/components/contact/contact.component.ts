import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Map, marker, tileLayer } from 'leaflet';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ReactiveFormsModule, FooterComponent, HeaderComponent]
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new Map('map').setView([41.24043, 1.7257], 20);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
      minZoom: 13,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const markerItem = marker([41.24043, 1.7257])
      .addTo(map)
      .bindPopup('CrossFit VNG <br> Carrer del guix 8');

    map.fitBounds([[markerItem.getLatLng().lat, markerItem.getLatLng().lng]]);
  }



  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      passportNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      streetAddress: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
