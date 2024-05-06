import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      dropdown: ['', Validators.required],
      experiencia: ['', Validators.required],
    });
  }

  sendToWhatsApp() {
    const { firstName, lastName, email, phone, dropdown, experiencia } =
      this.contactForm.value;
    const experienceMessage =
      experiencia === 'sinExperiencia'
        ? 'Nunca he hecho crossfit'
        : experiencia === 'conExperiencia'
        ? 'He entrenado CrossFit 3 meses o más'
        : 'No';
    const message = `Hello, my name is ${firstName} ${lastName}. My email is ${email}, phone ${phone}. Selected ${dropdown}, Experience: ${experienceMessage}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+34634671046&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }
}
