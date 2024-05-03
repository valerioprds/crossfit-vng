import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Rates } from '../../models/rates-info.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rates',
  standalone: true,
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.scss',
  imports: [HeaderComponent, RouterModule, FooterComponent, HttpClientModule, CommonModule],
})
export class RatesComponent implements OnInit {
  rates: Rates[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadRates();
  }

  loadRates() {
    this.http.get<Rates[]>('/assets/rates.json').subscribe((data) => {
      this.rates = data;
    });
  }
}
