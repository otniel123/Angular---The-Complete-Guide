import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button-component/button-component';
import { DynamicClassDiv } from "./dynamic-class-div/dynamic-class-div";
import { AlertComponent } from "./alert-component/alert-component";

@Component({
  selector: 'app-root',
  imports: [DynamicClassDiv, AlertComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('module-6-exercises-week');

  
}
