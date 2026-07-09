import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";
import { ResetAndFocusBtn } from "./reset-and-focus-btn/reset-and-focus-btn";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, ResetAndFocusBtn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-template-variables-drills');
}
