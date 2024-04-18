import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RatesComponent } from './components/rates/rates.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clases', component: ClassesComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'tarifas', component: RatesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
