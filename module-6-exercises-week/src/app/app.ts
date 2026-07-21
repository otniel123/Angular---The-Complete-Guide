import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button-component/button-component';
import { DynamicClassDiv } from "./dynamic-class-div/dynamic-class-div";

@Component({
  selector: 'app-root',
  imports: [DynamicClassDiv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('module-6-exercises-week');

  
}
