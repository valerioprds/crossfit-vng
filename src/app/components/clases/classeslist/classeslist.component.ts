import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClassSection, ClassInfo } from '../../../models/class-info.interface.ts';


@Component({
    selector: 'app-classeslist',
    standalone: true,
    templateUrl: './classeslist.component.html',
    styleUrl: './classeslist.component.scss',
    imports: [HeaderComponent, FooterComponent, CommonModule , HttpClientModule, ]
})
export class ClasseslistComponent implements OnInit {

  public sections: ClassSection[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData(): void {
    this.http.get<ClassInfo>('/assets/classInfo.json').subscribe(data => {
      this.sections = data.sections;
    });
  }
}
