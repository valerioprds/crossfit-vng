import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RatesComponent } from '../rates/rates.component';
import { ClassesSliderComponent } from '../clases/classes/classes-slider.component';
import { TimetableComponent } from "../timetable/timetable.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        FooterComponent,
        RatesComponent,
        ClassesSliderComponent,
        TimetableComponent
    ]
})
export class HomeComponent {}
