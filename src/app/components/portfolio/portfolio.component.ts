import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  flag: boolean = true;
  modelImg: string = '';
  portfolioSrc: string[] = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
  ];

  hideModel(element: EventTarget | null, img: HTMLImageElement): void {
    if (element == img) return;
    this.flag = true;
  }
}
