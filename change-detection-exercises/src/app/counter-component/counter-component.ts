import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  count = 0;

  increment(){
    console.log("Increment executed")
    this.count++;
  }

  get displayedCount(){
    console.log("Getter executed")
    return this.count;
  }
}
