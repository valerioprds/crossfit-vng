import { Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RatesComponent } from './components/rates/rates.component';
import { ClasseslistComponent } from './components/clases/classeslist/classeslist.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuestro-equipo', component: AboutusComponent },
  { path: 'clases', component: ClasseslistComponent },
  { path: 'registro-nuevo-cliente', component: ClientFormComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'tarifas', component: RatesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
