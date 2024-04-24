import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Map, marker, tileLayer } from 'leaflet';
import emailjs from '@emailjs/browser';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss',
  imports: [
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    CommonModule,
  ],
})
export class ClientFormComponent implements AfterViewInit {
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

  contactForm: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    passportNumber: '',
    phoneNumber: '',
    streetAddress: '',
    postCode: '',
    city: '',
    rates: '',
    termsAccepted: '',
  });

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
      rates: ['', Validators.required], // New field
      termsAccepted: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

  async send() {
    emailjs.init('rsiUmPMx9eew9V6y1')
    let response = await emailjs.send('service_tbbzfaj', 'template_o6ogluj', {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      dob: this.contactForm.value.dob,
      passportNumber: this.contactForm.value.passportNumber,
      phoneNumber: this.contactForm.value.phoneNumber,
      streetAddress: this.contactForm.value.streetAddress,
      postCode: this.contactForm.value.postCode,
      city: this.contactForm.value.city,
      rates: this.contactForm.value.rates,
      termsAccepted: this.contactForm.value.termsAccepted,
    });
    alert('message sent!!!!!');
    this.contactForm.reset()
  }
}
