import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-rates',
    standalone: true,
    templateUrl: './rates.component.html',
    styleUrl: './rates.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class RatesComponent {

}
