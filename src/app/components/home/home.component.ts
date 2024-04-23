import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RatesComponent } from "../rates/rates.component";
import { ClassesComponent } from "../classes/classes.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent, RatesComponent, ClassesComponent]
})
export class HomeComponent {

}
