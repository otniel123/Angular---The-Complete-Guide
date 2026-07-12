import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  imports: [],
  templateUrl: './timer-component.html',
  styleUrl: './timer-component.css',
})
export class TimerComponent {
  seconds = signal(0);
  private intervalId: any;

  startTimer(){
    this.intervalId = setInterval(() => {
      this.seconds.set(this.seconds() + 1);
    }, 1000)
  }

  stopTimer(){
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  resetTimer(){
    this.stopTimer()
    this.seconds.set(0);
  }
}
