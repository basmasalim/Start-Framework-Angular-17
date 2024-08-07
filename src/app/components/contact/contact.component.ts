import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  userAge!: number;
}
