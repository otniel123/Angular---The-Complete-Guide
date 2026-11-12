import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceComponent } from './place-component/place-component';

@Component({
  selector: 'app-root',
  imports: [PlaceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
