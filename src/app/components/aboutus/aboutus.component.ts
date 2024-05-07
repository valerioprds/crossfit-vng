import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-aboutus',
    standalone: true,
    templateUrl: './aboutus.component.html',
    styleUrl: './aboutus.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class AboutusComponent {

}
