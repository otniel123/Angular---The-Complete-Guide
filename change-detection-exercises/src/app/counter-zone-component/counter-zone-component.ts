import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-counter-zone-component',
  imports: [],
  templateUrl: './counter-zone-component.html',
  styleUrl: './counter-zone-component.css',
})
export class CounterZoneComponent implements DoCheck {
  ngDoCheck(): void {
    console.log("View checada");
  }
  count = 0;

  start(){
    setTimeout(() => {
      this.count++;
      console.log("Timeout executed")
    }, 2000);
  }
}
