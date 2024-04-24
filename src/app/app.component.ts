import { Component ,  Renderer2, ElementRef, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#212529');
  }
}
