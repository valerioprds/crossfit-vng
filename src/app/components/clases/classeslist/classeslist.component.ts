import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-classeslist',
    standalone: true,
    templateUrl: './classeslist.component.html',
    styleUrl: './classeslist.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class ClasseslistComponent {

}
