import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter-component/counter-component';
import { NameComponent } from './name-component/name-component';
import { NameAndCounterComponent } from './name-and-counter-component/name-and-counter-component';
import { CounterZoneComponent } from './counter-zone-component/counter-zone-component';
import { MainComponent } from './main.component';
import { CdrTestComponent } from './cdr.test.component';

@Component({
  selector: 'app-root',
  imports: [NameAndCounterComponent, CounterZoneComponent, MainComponent, CdrTestComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('change-detection-exercises');
}
