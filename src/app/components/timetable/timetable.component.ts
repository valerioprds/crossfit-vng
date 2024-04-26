import { Component, HostListener } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss',
})
export class TimetableComponent {
  iframeUrl!: SafeResourceUrl; // Change type to SafeResourceUrl

  constructor(private sanitizer: DomSanitizer) {
    this.setIframeUrl(window.innerWidth); // Set initial URL based on window size
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.setIframeUrl(event.target.innerWidth);
  }

  private setIframeUrl(width: number) {
    const url = width > 550
      ? 'https://crossfitvng.aimharder.com/timetable'
      : 'https://crossfitvng.aimharder.com/schedule';
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
