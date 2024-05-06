import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      dropdown: [''],
      checkbox1: [false],
      checkbox2: [false],
    });
  }

  sendToWhatsApp() {
    const {
      firstName,
      lastName,
      email,
      phone,
      dropdown,
      checkbox1,
      checkbox2,
    } = this.contactForm.value;
    const message = `Hello, my name is ${firstName} ${lastName}. My email is ${email}, phone ${phone}. Selected ${dropdown}, Checkbox1: ${
      checkbox1 ? 'Yes' : 'No'
    }, Checkbox2: ${checkbox2 ? 'Yes' : 'No'}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+34634671046&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }
}
