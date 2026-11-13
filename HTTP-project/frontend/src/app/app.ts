import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceComponent } from './place-component/place-component';
import { PlaceByIdComponent } from './place-by-id-component/place-by-id-component';

@Component({
  selector: 'app-root',
  imports: [PlaceComponent, PlaceByIdComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
