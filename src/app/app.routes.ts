import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClassesSliderComponent } from './components/classes/classes-slider.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RatesComponent } from './components/rates/rates.component';
import { ClasseslistComponent } from './components/classeslist/classeslist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
   { path: 'clases', component: ClasseslistComponent },
  { path: 'registro-nuevo-cliente', component: ClientFormComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'tarifas', component: RatesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
