import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";
import { ResetAndFocusBtn } from "./reset-and-focus-btn/reset-and-focus-btn";
import { FormSubmission } from './form-submission/form-submission';
import { ViewChildComponent } from './view-child-component/view-child-component';
import { TimerComponent } from './timer-component/timer-component';
import { AutomaticFocus } from './automatic-focus/automatic-focus';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, ResetAndFocusBtn, FormSubmission, ViewChildComponent, TimerComponent, AutomaticFocus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  timer = viewChild(TimerComponent);

  onStartTimer(){
    this.timer()?.startTimer();
  }

  onResetTimer(){
    this.timer()?.resetTimer();
  }

  onStopTimer(){
    this.timer()?.stopTimer();
  }
}
