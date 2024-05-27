import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
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
import Swal from 'sweetalert2';

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
export class ClientFormComponent {
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
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      dob: ['', Validators.required],
      passportNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8}[A-Za-z]|^[XYZ][0-9]{7}[A-Za-z]$/)]], // Updated pattern validator
      phoneNumber: ['', [Validators.required, Validators.minLength(9),  Validators.pattern('^[0-9+]+$')]],
      email: ['', [Validators.required, Validators.email]],
      streetAddress: ['', [Validators.required, Validators.minLength(9)]],
      postCode: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(5)]],
      rates: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

  async send() {
    emailjs.init('rsiUmPMx9eew9V6y1');
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
      termsAccepted: 'teminos aceptados',
    });
    Swal.fire({
      title: 'Muy Bien!',
      text: 'Tus datos han sido enviados',
      icon: 'success',
    });
    this.contactForm.reset();
  }
}
